<template>
  <div>
    <p>{{ counter }}</p>
    <p></p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  setup(props, context) {
    console.log(props.title);

    // Attributes (Non-reactive object, equivalent to $attrs)
    console.log(context.attrs);

    // Slots (Non-reactive object, equivalent to $slots)
    console.log(context.slots);

    // Emit events (Function, equivalent to $emit)
    console.log(context.emit);

    // Expose public properties (Function)
    console.log(context.expose);
  },

  //   export default {
  //   setup(props, { attrs, slots, emit, expose }) { // safely destructure
  //     ...
  //   }
  // }
};
</script>

<style scoped></style>
