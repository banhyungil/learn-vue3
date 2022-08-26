<template>
  <div>
    <h2 v-if="visible">true 입니다</h2>
    <h2 v-else>false 입니다.</h2>
    <hr />
    <p>template rendering</p>
    <template v-if="visible">
      <h2>안녕하세요</h2>
      <h2>반갑습니다</h2>
      <p>재밌는 실습이 되세요.</p>
    </template>
    <hr />
    <button @click="visible = !visible">toggle visible</button>
    <hr />
    <h2 v-if="typeH2 == 'A'">A 입니다.</h2>
    <h2 v-else-if="typeH2 == 'B'">B 입니다.</h2>
    <h2 v-else-if="typeH2 == 'C'">C 입니다.</h2>
    <h2 v-else>기타 입니다.</h2>
    <input type="text" v-model="typeH2" placeholder="타입을 입력해주세요" />
    <hr />
    <h2 v-show="isShow">v-show 입니다.</h2>
    <button @click="isShow = !isShow">toggle</button>
    <p>초기렌더링이 되고 display속성만 바뀝니다</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const visible = ref(true);
    const typeH2 = ref('A');
    const isShow = ref(true);

    return {
      visible,
      typeH2,
      isShow,
    };
  },
};
</script>

<style scoped></style>
