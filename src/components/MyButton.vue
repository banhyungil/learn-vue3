<template>
  <button class="btn btn-primary">button</button>
</template>

<script>
export default {
  setup(props, context) {
    // $listener는 제거되고 $attrs로 모두 통합됨
    // $listener는 vue 2에서 이벤트 non-prop을 담당했었음
    console.log('context.attrs', context.attrs);
    console.log('context.class', context.class);
    console.log('context.id', context.id);
    console.log('context.onClick', context.onClick);
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
