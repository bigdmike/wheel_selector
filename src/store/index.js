import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 1
  },
  mutations: {
    SetStep(state, step) {
      state.step = step
    }
  },
  actions: {},
  modules: {}
})