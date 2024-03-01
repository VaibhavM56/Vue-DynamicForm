<template>
  <div class="form-class">
    <div><FormFields /></div>
    <div><DynamicForm /></div>
  </div>
</template>

<script>
import DynamicForm from "src/components/DynamicForm.vue";
import FormPreview from "src/components/FormPreview.vue";
import FormFields from "src/components/FormFields.vue";

export default {
  components: {
    DynamicForm,
    FormFields,
  },
};
</script>

<style scoped>
.form-class {
  display: flex;
  flex-direction: row;
}
</style>
