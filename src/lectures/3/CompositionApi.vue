<script>
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const counter = ref(0); // 데이터와 메서드가 연달아 작성가능, 논리적 관심사로 묶인 코드를 그룹핑하는데에 유리
    const increment = () => counter.value++;

    onMounted(() => {
      console.log('컴포넌트가 마운트 되었습니다!');
    });
    return {
      counter,
      increment,
    };
  },
};
</script>

<template>
  <div>
    <button @click="increment">Counter {{ counter }}</button>
  </div>
</template>

<style scoped></style>
