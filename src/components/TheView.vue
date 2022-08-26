<template>
  <div>
    <main>
      <div class="container py-4">
        <PostCreate @createPost="createPost"> </PostCreate>

        <hr class="my-4" />

        <div class="row g-3">
          <div class="col col-4" v-for="post in posts" :key="post.id">
            <ViewCard
              :title="post.title"
              :contents="post.contents"
              :category="post.category"
              :is-like="post.isLike"
              @toggleLike="post.isLike = !post.isLike"
            ></ViewCard>
          </div>
        </div>
      </div>
      <hr class="my-4" />
      <!-- <LabelInput
        :model-value="userName"
        @update:modelValue="(value) => (userName = value)"
      ></LabelInput> -->
      <LabelInput v-model="userName" input-label="이름"></LabelInput>
      <!-- v-model argument -->
      <LabelTitle v-model:title="title" input-label="제목"></LabelTitle>
      <!-- component v-model 구현-->
      <hr clss="my-4" />
      <UserName
        v-model:firstName="firstName"
        v-model:lastName="lastName"
      ></UserName>
    </main>
  </div>
</template>

<script>
import ViewCard from '@/components/ViewCard.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
import LabelTitle from '@/components/LabelTitle.vue';
import UserName from '@/components/UserName.vue';
import { reactive, ref } from 'vue';

export default {
  components: { ViewCard, PostCreate, LabelInput, LabelTitle, UserName },

  setup() {
    const userName = ref('');
    const title = ref('');
    const firstName = ref('');
    const lastName = ref('');
    const createPost = (newPost) => {
      posts.push(newPost);
    };

    const posts = reactive([
      {
        id: 1,
        title: '제목1',
        contents: '내용1',
        isLike: true,
        category: 'news',
      },
      {
        id: 2,
        title: '제목2',
        contents: '내용2',
        isLike: true,
        category: 'news',
      },
      {
        id: 3,
        title: '제목3',
        contents: '내용3',
        isLike: true,
        category: 'news',
      },
      {
        id: 4,
        title: '제목4',
        contents: '내용4',
        isLike: true,
        category: 'news',
      },
      {
        id: 5,
        title: '제목5',
        contents: '내용5',
        isLike: false,
        category: 'notice',
      },
      {
        id: 6,
        title: '제목6',
        contents: '내용6',
        isLike: false,
        category: 'notice',
      },
    ]);

    return { posts, createPost, userName, title, firstName, lastName };
  },
};
</script>

<style lang="scss" scoped></style>
