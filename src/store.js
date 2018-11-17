import Vue from "vue";
import Vuex from "vuex";
import { letterforms } from './stores/letterforms';

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
  }),
  mutations: {},
  actions: {},
  modules: {
    letterforms
  }
});
