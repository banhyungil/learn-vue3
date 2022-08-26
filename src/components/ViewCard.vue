<template>
  <div>
    <div class="card">
      <div class="card-body">
        <!-- type : news, notice -->
        <span class="badge bg-secondary">
          {{ categoryName }}
        </span>
        <h5 class="card-title red mt-2">{{ title }}</h5>
        <p class="card-text">{{ contents }}</p>
        <a href="#" class="btn" @click.prevent="toggleLike" :class="isLikeClass"
          >좋아요</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

console.log('Appcard Module!');
export default {
  // props: ['title', 'contents'], 권장되지 않음, 상세히 작성하는것을 권장
  props: {
    // readonly이다, 상위 컴포넌트에서만 변경가능하다.
    category: {
      type: String,
      default: 'news',
      validator: (value) => {
        return ['news', 'notice'].includes(value);
      },
    },
    title: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      required: true,
    },
    isLike: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['toggleLike'],

  setup(props, context) {
    console.log('props.title: ', props.title);
    const isLikeClass = computed(() =>
      props.isLike ? 'btn-danger' : 'btn-outline-danger',
    );
    const categoryName = computed(() =>
      props.category === 'news' ? '뉴스' : '공지사항',
    );

    const toggleLike = () => {
      context.emit('toggleLike');
    };

    return { isLikeClass, categoryName, toggleLike };
  },
};
</script>

<style scoped></style>
