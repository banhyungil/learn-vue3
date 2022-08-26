<template>
  <div>
    <p>{{ message }}</p>
    <button @click="addMessage">Add Click</button>
  </div>
</template>

<script>
// import { reactive } from 'vue';
import { ref } from 'vue';
export default {
  setup() {
    // let message = reactive('Hello Vue!'); primitive는 반응형이 되지 않음. 상수로 취급되기 때문에 재할당시 새로운 메모리를 할당받음
    let message = ref('Hello Vue'); // ref는 반응형 객체를 반환, 값은 .value를 통해 접근 가능하다.

    const addMessage = () => (message.value = message.value + '!');
    return {
      message,
      addMessage,
    };
  },
};
</script>

<style scoped></style>
