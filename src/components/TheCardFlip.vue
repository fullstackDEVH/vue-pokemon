<template>
  <div class="card_contain">
    <div
      class="card"
      :class="{ isPlip }"
      @click="toggleFlip"
      :data-cardIndex="index"
    >
      <div class="card__front">
        <img :src="require(`../assets/imgs/${index}.png`)" alt="icon front" />
      </div>
      <div class="card__back">
        <img src="../assets/imgs/icon_back.png" alt="icon back" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCardFlip",
  data() {
    return {
      isPlip: false,
    };
  },
  props: {
    index: {
      type: Number,
    },
    arr: {
      type: [],
    },
  },
  methods: {
    toggleFlip() {
      this.isPlip = !this.isPlip;
      this.$emit("passIndex", this.index);
    },
  },
};
</script>

<style>
.card_contain {
  position: relative;
  width: 100px;
  aspect-ratio: 3/4;

  border-radius: 0.5rem;
  overflow: hidden;
}

.card {
  position: absolute;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  transition: all 1s ease;
  transform: rotateY(180deg);

  border-radius: 0.5rem;
  box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.card.isPlip {
  transform: rotateY(0);
}

.card__front,
.card__back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: #333;
}

.card__front {
  background: #ffc728;
}

.card__back {
  background: #fafafa;
  transform: rotateY(180deg);
}
</style>
