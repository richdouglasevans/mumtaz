import Vue from "vue";
import Router from "vue-router";
import Lobby from "./views/Lobby.vue";
import Letterforms from "./views/Letterforms.vue";

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
    }
  ]
});
