import Vue from "vue";
import Router from "vue-router";
import Lobby from "./views/Lobby.vue";
import Letterforms from "./views/Letterforms.vue";
import Vowels from "./views/Vowels.vue";

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
    }
  ]
});
