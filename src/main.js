import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import "./assets/css/bootstrap.css";
import "./assets/css/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.dispatch("getUserInfo");
  },
  render: (h) => h(App),
}).$mount("#app");
