<template>
  <div>
    <p>짝수</p>
    <ul>
      <tempalte v-for="item in items" :key="item.id">
        <li v-if="item.id % 2 === 0">
          {{ item.message }}
        </li>
      </tempalte>
    </ul>
    <hr />
    <p>홀수</p>
    <ul>
      <li v-for="item in oddItems" :key="item.id">
        {{ item.message }}
      </li>
    </ul>
    <hr />
    <p>object v-for</p>
    <ul>
      <li v-for="(value, key, index) in myObj" :key="key">
        {{ index }} - {{ key }} - {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue';
import { reactive } from 'vue';

export default {
  setup() {
    const items = reactive([
      { id: 1, message: 'Java' },
      { id: 2, message: 'HTML' },
      { id: 3, message: 'CSS' },
      { id: 4, message: 'JavaScript' },
    ]);

    const oddItems = computed(() => {
      return items.filter((item) => item.id % 2 === 1);
    });

    const myObj = reactive({
      title: '제목',
      author: '홍길동',
      date: '2022-08-25',
    });
    return {
      items,
      oddItems,
      myObj,
    };
  },
};
</script>

<style lang="scss" scoped></style>
