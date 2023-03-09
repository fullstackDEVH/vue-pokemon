import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PlayView from "../views/PlayView.vue";
import ScoreView from "../views/ScoreView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/play/:level",
    name: "play",
    component: PlayView,
  },
  {
    path: "/score",
    name: "score",
    component: ScoreView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
