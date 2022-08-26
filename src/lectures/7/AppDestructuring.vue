<template>
  <div>
    <h1>안녕</h1>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const book = reactive({
      author: 'Vue Team',
      year: '2022',
      title: 'Vue 3 Guide',
      price: '무료',
    });

    // destructuring Assign, no Ref
    const { year, price } = book;
    console.log(year, price);

    // destructuring Assign, ref
    const { author, title } = toRefs(book);
    console.log(author, title);

    return {
      book,
      year,
      price,
      author,
      title,
    };
  },
};
</script>

<style lang="scss" scoped></style>
