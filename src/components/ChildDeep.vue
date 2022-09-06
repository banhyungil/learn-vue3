<template>
  <div class="bodrder">
    <h2>ChildDepp</h2>
    <p></p>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const obj = inject('obj');
    return { obj };
  },
};
</script>

<style scoped>
.bodrder {
  border: 3px solid #000;
}
</style>
