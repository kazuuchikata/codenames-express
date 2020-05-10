import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user_count: 0,
    seconds: 0,
    connected: false,
    error: "",
    message: ""
  },
  mutations: {
    set_seconds(state, num) {
      state.seconds = num;
    },
    set_user_count(state, num) {
      state.user_count = num;
    }
  },
  actions: {
    SOCKET_seconds(context, num) {
      context.commit("set_seconds", num);
    },
    SOCKET_user_count(context, num) {
      context.commit("set_user_count", num);
    },
    SOCKET_ONLINE(state, num) {
      state.user_count = num;
    },
    SOCKET_CONNECT(state) {
      state.connected = true;
    },
    SOCKET_DISCONNECT(state) {
      state.connected = false;
    },
    SOCKET_MESSAGE(state, message) {
      state.message = message;
    },
    SOCKET_ERROR(state, message) {
      state.error = message.error;
    }
  }
});
