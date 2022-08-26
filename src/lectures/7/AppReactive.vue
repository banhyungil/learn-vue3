<template>
  <div>
    <button @click="increment">Click {{ state.count }}</button>
    <button @click="incrementDeep">Deep Click {{ state.deep.count }}</button>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    // reactive 함수는 반응형 객체로 만들어준다.
    const state = reactive({
      count: 0,
      deep: {
        count: 0,
      },
    });

    const increment = () => state.count++;
    const incrementDeep = () => state.deep.count++;
    return {
      state,
      increment,
      incrementDeep,
    };
  },
};
</script>

<style scoped></style>
