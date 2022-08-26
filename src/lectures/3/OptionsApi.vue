<script>
export default {
  data() {
    return {
      counter: 0, // 데이터와 메서드가 분리되어있음. 코드 그룹핑에 불리
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
  },
  mounted() {
    console.log('컴포넌트가 마운트 되었습니다.');
  },
};
</script>

<template>
  <div>
    <button v-on:click="increment">Counter:{{ counter }}</button>
  </div>
</template>

<style scoped></style>
