<template>
  <div>
    <!-- Emogi : Window + . -->
    <h2>{{ teacher.name }}</h2>
    <h3>강의가 있습니까</h3>
    <p>{{ 'computed : ' + hasLecture }}</p>
    <p>{{ 'function : ' + existLecture() }}</p>
    <h3>computed는 캐싱 됨으로 성능이 좋음</h3>
    <h3>function은 호출될때마다 실행되므로 비효율!</h3>
    <button @click="() => (teacher.lectures = [])">Empty</button>
    <button
      @click="() => (teacher.lectures = ['HTML/CSS', 'Javascript', 'Vue3'])"
    >
      Fill
    </button>
    <h2>이름</h2>
    <p>{{ fullName }}</p>
    <p>{{ fullNameGetSet }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
  setup() {
    const teacher = reactive({
      name: 'Half Road',
      lectures: ['HTML/CSS', 'Javascript', 'Vue3'],
    });

    const hasLecture = computed(() => {
      return teacher.lectures.length > 0 ? '있음 👌' : '없음 😢';
    });

    const existLecture = () => {
      return teacher.lectures.length > 0 ? '있음 👌' : '없음 😢';
    };

    const firstName = ref('홍');
    const lastName = ref('길동');

    // computed는 기본적으로 readonly다. 재할당 불가능
    const fullName = computed(() => firstName.value + lastName.value);

    // get, set을 추가하면 재할당을 할 수 있다.
    const fullNameGetSet = computed({
      get() {
        return firstName.value + lastName.value;
      },
      set(value) {
        [firstName.value, lastName.value] = value.split(' '); // 공백을 통해 firstName, lastName 분리
      },
    });

    // computed도 ref의 한 종류이다.
    fullNameGetSet.value = '반 현길';

    return {
      teacher,
      hasLecture,
      existLecture,
      fullName,
      fullNameGetSet,
    };
  },
};
</script>

<style lang="scss" scoped></style>
