<template>
  <nav>
    <router-link v-for="route in routes" :key="route.path" :to="route.path">{{
      route.name
    }}</router-link>
  </nav>
</template>

<script>
import { reactive, readonly } from "vue";

export default {
  setup() {
    const routes = reactive([
      {
        path: "/",
        name: "home",
      },
      {
        path: "/play/:level",
        name: "play",
      },
      {
        path: "/score",
        name: "score",
      },
    ]);

    return {
      routes: readonly(routes),
    };
  },
};
</script>

<style>
nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 0.5rem;
  background: var(--light);
  display: flex;
  align-items: center;
  gap: 1rem;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
