import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    viewPopUp: {
      show: false,
      name: ''
    },
    selectedBike: {},
    bikes: [
      {
          status: 'Available',
          status_info: {
              available: false,
              occupied: true,
              under_maintenance: false
          },
          serial_no: 'abdc-5252wy',
          docking_station: 'Docking no. 1',
          franchise_id: '1262835'
      },
      {
          status: 'Available',
          status_info: {
              available: true,
              occupied: false,
              under_maintenance: false
          },
          serial_no: 'abdc-1452wy',
          docking_station: 'Docking no. 2',
          franchise_id: '1277335'
      }
    ]
  },
  mutations: {
    showPopUp(state, data) {
      state.viewPopUp.name = data.name ? data.name : ''
      state.viewPopUp.show = data.show
    },
    selectBike(state, index) {
      state.selectedBike = state.bikes[index]
    }
  },
  actions: {
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
