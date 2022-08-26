<template>
  <div>
    <LabelInput
      input-label="성"
      :model-value="firstName"
      @update:model-value="(value) => $emit('update:firstName', value)"
    ></LabelInput>
    <LabelInput
      input-label="이름"
      :model-value="lastName"
      @update:model-value="(value) => $emit('update:lastName', value)"
    ></LabelInput>
  </div>
</template>

<script>
import LabelInput from '@/components/LabelInput.vue';
export default {
  components: { LabelInput },
  props: ['firstName', 'lastName'],
  emits: ['update:firstName', 'update:lastName'],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
