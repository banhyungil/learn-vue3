<template>
  <div class="row g-3">
    <div class="col col-2">
      <select
        v-model="newPost.category"
        class="form-select"
        aria-label="Default select example"
      >
        <option selected value="news">뉴스</option>
        <option value="notice">공지사항</option>
      </select>
    </div>
    <div class="col col-8">
      <input
        type="text"
        class="form-control"
        @keyup.enter="createPost"
        v-model="newPost.title"
      />
    </div>
    <div class="col col-2 d-grid">
      <button class="btn btn-primary" @click="createPost">버튼</button>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  emits: {
    // emit function validator 추가
    createPost: (newPost) => {
      if (!newPost.category) {
        return false;
      } else if (!newPost.title) {
        return false;
      }

      return true;
    },
  },
  // destructuring assign : emit
  setup(props, { emit }) {
    const newPost = reactive({
      category: 'news',
      title: '',
      contents: '내용',
      isLike: false,
    });
    const createPost = () => {
      let obj = JSON.parse(JSON.stringify(newPost));
      emit('createPost', obj);
    };
    return {
      createPost,
      newPost,
    };
  },
};
</script>

<style lang="scss" scoped></style>
