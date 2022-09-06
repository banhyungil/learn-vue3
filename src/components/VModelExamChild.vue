<template>
  <div>
    <label for="">Child : </label>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
};
</script>

<style scoped></style>
