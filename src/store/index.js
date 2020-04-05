import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    viewPopUp: {
      show: false,
      name: ''
    },
    selectedBike: {},
    bikes: []
  },
  mutations: {
    showPopUp(state, data) {
      state.viewPopUp.name = data.name ? data.name : ''
      state.viewPopUp.show = data.show

      // clear selected data 
      if (!data.show) state.selectedBike = {}
    },
    selectBike(state, index) {
      state.selectedBike = state.bikes[index]
    },
    loadBikesFromApi(state, bikes) {
      state.bikes = bikes
    },
    addBike(state, bikeData) {
      state.bikes.push(bikeData)
    },
    editBike(state, bikeData) {
      let itemIndex = state.bikes.findIndex(bike => bike.id == bikeData.id)

      state.bikes.splice(itemIndex, 1, bikeData)  // update the bike in the vuex store
    },
    deleteBike(state, selectedBikeId) {
      let itemIndex = state.bikes.findIndex(bike => bike.id == selectedBikeId)

      state.bikes.splice(itemIndex, 1)
    }
  },
  actions: {
    loadBikesFromApi({commit},bikesArray) {
      commit('loadBikesFromApi', bikesArray)
    },
    addBike({commit}, bikeData) {

      axios.post('https://vue-bikes.firebaseio.com/bikes.json', bikeData).then((res) => {
          // id
          const id = res.data.name
          commit('addBike', {...bikeData, id: id})
          
          // close the pop up
          commit('showPopUp', {show: false})
      })

    },
    editBike({commit}, bikeData) {
      axios.put('https://vue-bikes.firebaseio.com/bikes/'+ bikeData.id + '.json', bikeData).then(() => {
        commit('editBike', bikeData)
        //console.log(res.data)
        commit('showPopUp', {show: false})
      })
    },
    deleteBike({commit, getters}) {
      let selectedBike = getters.getSelectedBike // from getters

      axios.delete('https://vue-bikes.firebaseio.com/bikes/' + selectedBike.id + '.json').then(() => {
        commit('deleteBike', selectedBike.id)
      })
      
      
      // close the pop up
      commit('showPopUp', {show: false})
    },
    showPopUp({dispatch, commit}, data) {
      commit('showPopUp', data)

      if(data.name == 'edit') {
        dispatch('selectBike', data.index)
      }

      if (data.name == 'delete') {
        dispatch('selectBike', data.index)
      }
    },
    selectBike({commit}, index) {
      commit('selectBike', index)
    }
  },
  getters: {
    PopUpState(state) {
      return state.viewPopUp
    },
    getBikes(state) {
      return state.bikes
    },
    getSelectedBike(state) {
      return state.selectedBike
    }
  },
  modules: {
  }
})
