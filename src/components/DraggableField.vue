<template>
  <div
    class="draggable-field"
    draggable="true"
    @dragstart="dragStart"
  >
    {{ label }}
  </div>
</template>

<script>
export default {
  props: ['label'],
  methods: {
    dragStart(event) {
      event.dataTransfer.setData('text/plain', this.label);
    },
  },
};
</script>

<style>
.draggable-field {
  padding: 10px;
  margin: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
}
</style>