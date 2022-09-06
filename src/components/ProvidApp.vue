<template>
  <div class="bodrder">
    <h2>Provide</h2>
    <input type="text" v-model="message" />
    <ChildApp></ChildApp>
  </div>
</template>

<script>
import ChildApp from '@/components/ChildApp.vue';
import { provide, reactive, ref } from 'vue';
export default {
  components: {
    ChildApp,
  },
  setup() {
    const message = ref('Provide Message');
    const obj = reactive({
      message: message,
    });
    console.log('ref message', message);
    console.log('provicd obj.message', typeof obj.message);
    const message2 = 'Provicde Message2';
    provide('obj', obj);
    provide('message2', message2);

    return { obj, message2, message };
  },
};
</script>

<style scoped>
.bodrder {
  border: 3px solid #000;
}
</style>
