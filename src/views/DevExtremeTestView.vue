<template>
  <div>
    <h1>DevExtremeTestView</h1>
    <MyDxDataGrid></MyDxDataGrid>
  </div>
</template>

<script>
export default {
  components: {
    MyDxDataGrid,
  },
  setup() {
    return {};
  },
};
import MyDxDataGrid from '@/components/devExtreme/MyDxDataGrid.vue';
</script>

<style lang="scss" scoped></style>
