import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: 'zh'
  },
  mutations: {
    setLang (state, lang) {
      state.lang = lang;
    }
  },
  actions: {
    setLang ({commit}, lang) {
      commit('setLang', lang);
    }
  }
});
