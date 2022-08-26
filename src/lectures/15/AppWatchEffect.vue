<template>
  <div>
    <form action="" @submit.prevent="save(title, contents)">
      <input type="text" v-model.lazy="title" placeholder="Title" />
      <textarea
        v-model.lazy="contents"
        placeholder="Contents"
        cols="30 "
        rows="10"
        style="display: block"
      ></textarea>
      <button>저장</button>
    </form>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const title = ref('');
    const contents = ref('');

    const save = (title, contents) => {
      console.log(`저장되었습니다. title: ${title}, contents: ${contents}`);
    };
    watchEffect(() => {
      // 암시적으로 사용되는 reactive 데이터를 감시
      console.log('watchEffect');
      save(title.value, contents.value);
    });

    return {
      title,
      contents,
      save,
    };
  },
};
</script>

<style lang="scss" scoped></style>
