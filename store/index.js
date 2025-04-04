import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 存储用户信息
export default new Vuex.Store({
    state: {
      userInfo: null,
      token: null
    },
    getters: {
      isLoggedIn: state => !!state.token
    },
    mutations: {
      setUserInfo(state, userInfo) {
        state.userInfo = userInfo
      },
      setToken(state, token) {
        state.token = token
      },
      logout(state) {
        state.userInfo = null
        state.token = null
      }
    }
})