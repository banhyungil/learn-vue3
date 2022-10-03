<template>
  <DxDataGrid :data-source="dataSource" :show-borders="true">
    <DxPaging :page-size="12" />
    <DxPager
      :show-page-size-selector="true"
      :allowed-page-sizes="[8, 12, 20]"
    />
  </DxDataGrid>
</template>
<script>
import { DxDataGrid, DxPaging, DxPager } from 'devextreme-vue/data-grid';
import data from '@/data/customer.json';

export default {
  components: {
    DxDataGrid,
    DxPaging,
    DxPager,
  },
  data() {
    return {
      dataSource: data,
    };
  },
};
</script>
