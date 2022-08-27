<template>
  <div>
    <div class="container py-4">
      <MyButton type="button" @click="sayHello"></MyButton>
    </div>
  </div>
  <ProvidApp></ProvidApp>
</template>

<script>
import MyButton from '@/components/MyButton.vue';
import ProvidApp from '@/components/ProvidApp.vue';
export default {
  components: { MyButton, ProvidApp },
  setup() {
    const sayHello = () => {
      alert('안녕하세요.');
    };
    return { sayHello };
  },
};
</script>

<style lang="scss" scoped></style>
