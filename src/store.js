import Vue from "vue";
import Vuex from "vuex";
import { alphabet } from './stores/alphabet';

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
  }),
  mutations: {},
  actions: {},
  modules: {
    alphabet
  }
});
