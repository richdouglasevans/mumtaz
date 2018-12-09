import Vue from "vue";
import Vuex from "vuex";
import { vowels } from './stores/vowels';
import { letterforms } from './stores/letterforms';

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
  }),
  mutations: {},
  actions: {},
  modules: {
    letterforms,
    vowels
  }
});
