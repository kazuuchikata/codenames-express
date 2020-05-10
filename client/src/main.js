import Vue from "vue";
import VueSocketio from "vue-socket.io";
import SocketIO from "socket.io-client";

import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(
  new VueSocketio({
    connection: SocketIO("http://localhost:3000"),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
