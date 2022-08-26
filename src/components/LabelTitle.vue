<template>
  <div>
    <label for="">
      {{ inputLabel }}
      <input v-model="value" type="text" />
    </label>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  // custom component v-model 구현하기
  props: ['title', 'inputLabel'],
  emits: ['update:title'],
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.title;
      },
      set(value) {
        emit('update:title', value);
      },
    });
    return { value };
  },
};
</script>

<style lang="scss" scoped></style>
