import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "src/assets/scss/_index.scss";
import "assets/scss/reset.scss";
import VueI18n from 'vue-i18n';
import zh from './lang/zh';
import en from './lang/en';

Vue.config.productionTip = false;
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zh',  // 语言标识
  messages: {
    'zh': zh,
    'en': en
  }
});
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
