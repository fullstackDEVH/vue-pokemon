<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  props: {},
  setup(props) {
    console.log(props);

    return {};
  },

  onMounted() {
    console.log("mount");
  },
};
</script>

<style>
#app {
  background: var(--dark);
  height: 100vh;
  color: var(--light);
}

main {
  height: 100%;
}
</style>
