<template>
  <div>
    <div class="text" :class="{ active: isActive, 'text-danger': hasError }">
      텍스트입니다.
    </div>
    <div :class="classObj">클래스 객체 바인딩 입니다.</div>
    <div :class="[activeClass, errorClass]">클래스 배열 바인딩 입니다.</div>
    <button @click="toggle">toggleBold</button>
    <button @click="hasError = !hasError">toggleError</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    const isActive = ref(true);
    const hasError = ref(false);

    const classObj = reactive({
      active: isActive,
      'text-danger': hasError,
    });

    const activeClass = ref('active');
    const errorClass = ref('text-danger');

    const toggle = () => {
      isActive.value = !isActive.value;
    };

    return {
      isActive,
      hasError,
      classObj,
      toggle,
      activeClass,
      errorClass,
    };
  },
};
</script>

<style scoped>
.active {
  font-weight: bold;
}
.text-danger {
  color: red;
}
</style>
