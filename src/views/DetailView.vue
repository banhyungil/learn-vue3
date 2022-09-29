<template>
  <div>
    <h1>상세</h1>
    <button @click="goMain">main</button>
  </div>
</template>

<script setup>
import router from '@/router';

const goMain = () => {
  router.push('/main');
};
</script>

<style lang="scss" scoped></style>
