<template>
  <div>
    <label for="">
      {{ inputLabel }}
      <input v-model="value" type="text" />
      <!-- :value="modelValue"
        @input="(event) => $emit('update:modelValue', event.target.value)" -->
    </label>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  // custom component v-model 구현하기
  props: ['modelValue', 'inputLabel'],
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit('update:modelValue', value);
      },
    });
    return { value };
  },
};
</script>

<style lang="scss" scoped></style>
