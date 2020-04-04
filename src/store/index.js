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

      state.bikes[itemIndex] = bikeData  // update the bike in the vuex store
      
    }
  },
  actions: {
    loadBikesFromApi() {
      axios.get('https://vue-bikes.firebaseio.com/bikes.json').then(res => {
          const bikesArray = []

          for (const key in res.data) {
            bikesArray.push({ ...res.data[key], id: key})
          }

        this.commit('loadBikesFromApi', bikesArray)
      })
    },
    addBike({commit}, bikeData) {

      axios.post('https://vue-bikes.firebaseio.com/bikes.json', bikeData).then(() => {
          commit('addBike', bikeData)

          // close the pop up
          commit('showPopUp', {show: false})
      })

    },
    editBike({commit},bikeData) {
      axios.put('https://vue-bikes.firebaseio.com/bikes/'+ bikeData.id + '.json', bikeData).then(() => {
        commit('editBike', bikeData)
        commit('showPopUp', {show: false})
      })
      
    },
    showPopUp({dispatch, commit}, data) {
      commit('showPopUp', data)

      if(data.name == 'edit') {
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
