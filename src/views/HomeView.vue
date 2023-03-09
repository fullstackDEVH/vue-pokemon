<template>
  <div class="home">
    <h2>POKE MEMORIES</h2>
    <h3>Select mode to start game</h3>
    <div class="cards">
      <TheCardLevel
        :pathName="item.pathName"
        :level="item.level"
        :size="item.size"
        v-for="(item, ind) in cards"
        v-bind:key="level + ind"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheCardLevel from "@/components/TheCardLevel.vue";

export default {
  name: "HomeView",
  data() {
    return {
      cards: [
        {
          level: "Easy",
          size: 4,
          pathName: "easy",
        },
        {
          level: "Normal",
          size: 16,
          pathName: "normal",
        },
        {
          level: "Hard",
          size: 36,
          pathName: "hard",
        },
        {
          level: "Super Hard",
          size: 64,
          pathName: "super-hard",
        },
      ],
    };
  },
  components: {
    TheCardLevel,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  height: 100%;

  color: var(--light);
}

.home h2 {
  font-size: 3.5rem;
  text-transform: uppercase;
}

.home h3 {
  font-size: 2.5rem;
  letter-spacing: 0.1px;
}

.cards {
  display: flex;
  margin-top: 2rem;
}
</style>
