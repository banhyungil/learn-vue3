<template>
  <div>
    <h2>reactive Obj</h2>
    <p>ref 바인딩 해도 계산식은 반영되지 않음(font Size)</p>
    <div :style="styleObj">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
      repudiandae, quae similique voluptatibus pariatur explicabo officia quas
      aperiam suscipit expedita quasi debitis beatae eos non modi. Esse expedita
      vero placeat!
    </div>
    <button @click="divFontSize--">Font -</button>
    <input type="text" v-model="divColor" />
    <hr />
    <h2>computed Obj</h2>
    <div :style="styleObjComputed">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo expedita
      repellendus eius, quisquam, accusantium dignissimos culpa autem nisi,
      perferendis beatae itaque. Nemo consequuntur recusandae vitae! Voluptatem
      ratione iusto facere facilis.
    </div>
    <hr />
    <button @click="divFontSize--">Font -</button>
    <button @click="divFontSize++">Font +</button>
    <input type="text" v-model="divColor" />
  </div>
</template>

<script>
import { computed } from 'vue';
import { reactive, ref } from 'vue';

export default {
  setup() {
    const divFontSize = ref(13);
    const divColor = ref('red');

    const styleObj = reactive({
      color: divColor,
      fontSize: divFontSize.value + 'px',
    });

    const styleObjComputed = computed(() => {
      return {
        color: divColor.value,
        fontSize: divFontSize.value + 'px',
      };
    });

    return {
      styleObj,
      styleObjComputed,
      divFontSize,
      divColor,
    };
  },
};
</script>

<style scoped></style>
