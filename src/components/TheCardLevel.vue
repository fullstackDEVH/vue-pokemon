<template>
  <div class="card-flip">
    <router-link :to="'/play/' + size">
      <div class="card-size">{{ size }}</div>
      <div class="card-level">{{ level }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TheCardLevel",
  props: {
    size: {
      type: Number,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    pathName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-flip {
  border-radius: 0.5rem;
  border: 1px solid var(--light);
  margin: 0 1rem;

  width: 150px;
  height: 150px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.card-size {
  font-size: 1.6rem;
  font-weight: 600;
}

.card-level {
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
}

.card:hover {
  color: var(--dark);
  background: var(--light);
}
</style>
