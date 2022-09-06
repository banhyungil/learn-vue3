<template>
  <VModelExamChild v-model="title"></VModelExamChild>
  <label for="">Parent : </label>
  <span>{{ title }}</span>
</template>

<script>
import VModelExamChild from '@/components/VModelExamChild.vue';
export default {
  data() {
    return {
      title: '',
    };
  },
  components: {
    VModelExamChild,
  },
};
</script>

<style scoped></style>
