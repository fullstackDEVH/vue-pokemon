<template>
  <div
    class="play"
    :style="{
      'grid-template-columns': `repeat(${Math.sqrt(
        cardNumber.length
      )}, minmax(0, 1fr))`,
    }"
  >
    <TheCardFlip
      v-for="indexCard in shuffle"
      :index="indexCard"
      :key="indexCard"
      
      @passIndex="check($event)"
    />
  </div>
</template>

<script>
import TheCardFlip from "@/components/TheCardFlip.vue";
export default {
  data() {
    return {
      size: 0,
      cardNumber: [],
      checks: [],
      t: [],
    };
  },
  components: {
    TheCardFlip,
  },
  methods: {
    check(index) {
      this.checks.push(index);

      if (this.checks[0] === this.checks[1]) {
        this.t.push(index);
        console.log(index);
      }
      if (this.checks.length === 2) {
        this.checks = [];
      }

      console.log(this.checks);
    },
    createSequenceNumber(number) {
      let duplicate = Array(+number / 2)
        .fill()
        .map((_, index) => index + 1);

      this.cardNumber = [...duplicate, ...duplicate];
    },
    checkForDuplicate() {},
  },
  computed: {
    shuffle() {
      for (let i = this.cardNumber.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cardNumber[i], this.cardNumber[j]] = [
          this.cardNumber[j],
          this.cardNumber[i],
        ];
      }
      return this.cardNumber;
    },
  },
  mounted() {
    this.createSequenceNumber(this.$route.params.level);
  },
};
</script>

<style>
.play {
  padding-top: 3rem;
  height: 100%;
  width: 70%;
  margin: 0 auto;
  color: var(--light);
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.5rem;
}

h1 {
}
</style>
