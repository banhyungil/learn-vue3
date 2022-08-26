<template>
  <div>
    <p>{{ msg }}</p>
    <!-- {{}} 같음-->
    <p v-text="msg"></p>
    <!--한번만 렌더링 됨, 업데이트 되지 않음-->
    <p v-once>{{ counter }}</p>
    <p v-memo="[memoElt]">{{ counter }}</p>
    <button @click="counter++">+</button>
    <p>memoElt 바꿔보세요</p>
    <input type="text" v-model="memoElt" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const msg = ref('안녕하세요.');
    const counter = ref(1);
    const memoElt = ref('');
    return {
      msg,
      counter,
      memoElt,
    };
  },
};
</script>

<style lang="scss" scoped></style>
