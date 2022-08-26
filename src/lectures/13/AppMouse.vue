<template>
  <div>
    <div>
      <div id="modifiers">
        <!-- modifier, capture : Propagation capture mode로  -->
        <!-- event Handler-->
        <div @click.capture="clickDiv">
          Div 영역
          <!-- modifier, self : 자기 자신에 해당 되는경우만 실행 (Propagation으로 실행되지 않는 다는 말)-->
          <p @click.self="clickP">
            p 영역
            <!--modifier, stop : stopPropagation-->
            <span @click="clickSpan">
              span 영역
              <a href="https://naver.com" @click.prevent.stop="clickA">
                a 영역
              </a>
            </span>
          </p>
        </div>
      </div>
      <a href="https://naver.com" @click.prevent="clickA">a 영역</a>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const clickDiv = () => {
      console.log('clickDiv');
      location.href = 'https://naver.com';
    };
    const clickP = () => {
      console.log('clickP');
    };
    const clickSpan = () => {
      console.log('clickSpan');
    };
    const clickA = () => {
      console.log('clickA');
    };
    return {
      clickDiv,
      clickP,
      clickSpan,
      clickA,
    };
  },
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
}

#modifiers div {
  background-color: rgb(154, 152, 152);
}
#modifiers p {
  background-color: rgb(103, 100, 100);
}
#modifiers span {
  background-color: rgb(79, 77, 77);
  display: block;
}
</style>
