<template>
  <div>
    <TheNav></TheNav>
    <TheView></TheView>
  </div>
</template>

<script>
import TheNav from '@/layouts/TheNav.vue';
import TheView from '@/layouts/TheView.vue';
export default {
  components: {
    TheNav,
    TheView,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
