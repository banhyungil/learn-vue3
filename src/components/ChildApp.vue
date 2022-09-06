<template>
  <div class="bodrder">
    <h2>Child</h2>
    <p>{{ message }}</p>
    <p>{{ message2 }}</p>
    <ChildDeep></ChildDeep>
  </div>
</template>

<script>
import ChildDeep from '@/components/ChildDeep.vue';
import { inject } from 'vue';

export default {
  components: {
    ChildDeep,
  },
  setup() {
    const obj = inject('obj');
    const message = obj.message;
    console.log('obj.message:', typeof obj.message);
    const message2 = inject('message2');
    return { obj, message2, message };
  },
};
</script>

<style scoped>
.bodrder {
  border: 3px solid #000;
}
</style>
