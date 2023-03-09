<template>
  <div>Composition api</div>
  <div class="name">{{ name }}</div>
  <button @click="testCompositionApi">test</button>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
export default {
  setup() {
    let name = ref("huy");
    let car = reactive({
      name: "Vin",
      price: 500000,
    });

    function testCompositionApi() {
      console.log("testCompositionApi");
      name = "huy ddepj trai";

      console.log(car);
      // name is not reactivity same optionAPI (value change but not re-render)
      // if you want reactivity in composionApi, use ref
      // ref syntax : name.value = "huy ddepj trai"
      // reactive syntax : car.name = "vin"
    }

    onMounted(() => {
      console.log("mounted in composition Api");
    });

    return { name, testCompositionApi, car };
  },
};
</script>
