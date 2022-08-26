<template>
  <div>
    <p>Enter</p>
    <input type="text" @keyup.enter="addTodo" />
    <p>Ctrl + Enter</p>
    <input type="text" @keyup.ctrl.enter="addTodo" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const todos = reactive([]);

    const addTodo = (event) => {
      todos.push(event.target.value);
      event.target.value = '';
    };
    return {
      todos,
      addTodo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
