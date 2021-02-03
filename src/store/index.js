import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 1,
    loading: false,
    dialog: {
      status: false,
      msg: ""
    },
    baseUrl: process.env.VUE_APP_BASEURL
  },
  mutations: {
    SetStep(state, step) {
      state.step = step
    },
    SetLoading(state, action) {
      state.loading = action
    },
    SetDialog(state, [action, msg]) {
      state.dialog.status = action
      state.dialog.msg = msg
    }
  },
  actions: {},
  modules: {}
})