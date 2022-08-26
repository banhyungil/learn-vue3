<template>
  <div>
    <h2>input Value</h2>
    <!-- <input
      type="text"
      :value="inputValue"
      @input="(event) => (inputValue = event.target.value)"
    /> -->
    <input type="text" v-model="inputValue" />
    <p>lazy modifier</p>
    <input type="text" v-model.lazy="inputValue" />
    <!-- 숫자 형변환 -->
    <p>number</p>
    <input type="text" v-model.number="inputValue" />
    <p>trim</p>
    <input type="text" v-model.trim="inputValue" />
    <p>{{ inputValue }}</p>
    <hr />
    <h2>checkbox value</h2>
    <label for="checkbox">{{ checkboxValue }}</label>
    <!-- <input
      type="checkbox"
      name="checkbox"
      id="checkbox"
      :checked="checkboxValue"
      @change="(event) => (checkboxValue = event.target.checked)"
    /> -->
    <input
      type="checkbox"
      name="checkbox"
      id="checkbox"
      v-model="checkboxValue"
    />
    <h2>checkbox values</h2>
    <p>수강강좌</p>
    <label for="chk-html">HTML</label>
    <input
      type="checkbox"
      id="chk-html"
      value="html"
      v-model="checkboxValues"
    />
    <label for="chk-css">CSS</label>
    <input type="checkbox" id="chk-css" value="css" v-model="checkboxValues" />
    <label for="chk-javascript">Javascript</label>
    <input
      type="checkbox"
      id="chk-javascript"
      value="javascript"
      v-model="checkboxValues"
    />
    <p>{{ checkboxValues }}</p>
    <hr />
    <h2>radio value</h2>
    <label for="">
      <!-- <input
        type="radio"
        name="bloodType"
        value="O"
        :cheked="radioValue === 'O'"
        @change="(event) => (radioValue = event.target.value)"
      /> -->
      <input type="radio" name="bloodType" value="O" v-model="radioValue" />
      O형
    </label>
    <label for="">
      <!-- <input
        type="radio"
        name="bloodType1"
        value="A"
        :checked="radioValue === 'A'"
        @change="(event) => (radioValue = event.target.value)"
      /> -->
      <input type="radio" name="bloodType1" value="A" v-model="radioValue" />
      A형
    </label>
    <div>{{ radioValue }}</div>
    <hr />
    <h2>select value</h2>
    <!-- <select
      name=""
      id=""
      :value="selectValue"
      @change="(event) => (selectValue = event.target.value)"
    > -->
    <select name="" id="" v-model="selectValue">
      <option value="html">HTML 수업</option>
      <option value="css">CSS 수업</option>
      <option value="javascript">Javascript 수업</option>
    </select>
    <div>{{ selectValue }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const inputValue = ref('');
    const checkboxValue = ref(true);
    const checkboxValues = ref([]);
    const radioValue = ref('O');
    const selectValue = ref('html');

    return {
      inputValue,
      checkboxValue,
      checkboxValues,
      radioValue,
      selectValue,
    };
  },
};
</script>

<style lang="scss" scoped></style>
