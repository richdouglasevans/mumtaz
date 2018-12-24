import Vue from "vue";
import Router from "vue-router";
import Lobby from "./views/Lobby.vue";
import Vowels from "./views/Vowels.vue";
import Numberforms from "./views/Numberforms.vue";
import Letterforms from "./views/Letterforms.vue";
import TheNextNumber from "./views/TheNextNumber.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "lobby",
      component: Lobby
    },
    {
      path: "/letterforms",
      name: "letterforms",
      component: Letterforms
    },
    {
      path: "/vowels",
      name: "vowels",
      component: Vowels
    },
    {
      path: "/numberforms",
      name: "numberforms",
      component: Numberforms
    },
    {
      path: "/nextnumber",
      name: "nextnumber",
      component: TheNextNumber
    }
  ]
});
