<template>
  <div>
    <h1>메인</h1>
    <button @click="goDetail">상세</button>
  </div>
</template>

<script setup>
import router from '@/router';

const goDetail = () => {
  router.push('/detail');
};
</script>

<style lang="scss" scoped></style>
