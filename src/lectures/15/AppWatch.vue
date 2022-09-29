<template>
  <div>
    <input type="text" v-model="message" />
    <hr />
    <label for="">x</label>
    <input type="text" v-model.number.lazy="x" />
    <label for="">y</label>
    <input type="text" v-model.number.lazy="y" />
    <hr />
    <label for="">name</label>
    <input type="text" v-model.lazy="name" />
    <label for="">age</label>
    <input type="text" v-model.lazy="age" />
    <hr />
    <label for="">obj.count</label>
    <button @click="obj.count++">+</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
  setup() {
    const message = ref('');

    watch(message, (newValue, oldValue) => {
      console.log('newValue:', newValue);
      console.log('oldValue:', oldValue);
    });

    const x = ref(0);
    const y = ref(0);

    const getter = () => x.value + y.value;
    watch(getter, (newValue, oldValue) => {
      console.log('x + y newValue:', newValue);
      console.log('x + y oldValue:', oldValue);
    });

    const name = ref('ban');
    const age = ref(30);

    watch([name, age], (newValue, oldValue) => {
      console.log('new:', newValue);
      console.log('old:', oldValue);
    });

    const obj = reactive({
      count: 0,
      subObj: {
        count: 0,
      },
    });

    // 객체 속성은 getter함수를 이용
    console.log(typeof obj.count);
    watch(
      () => obj.count,
      (newValue) => {
        console.log('obj.count :', newValue);
      },
    );

    watch(obj.count, (newValue) => {
      console.log(newValue);
    });

    return {
      message,
      x,
      y,
      name,
      age,
      obj,
    };
  },
};
</script>

<style lang="scss" scoped></style>
