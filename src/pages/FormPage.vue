<template>
  <div class="form-class row">
    <div class="col-4 sticky-column">
      <FormFields />
    </div>
    <div class="col-6 offset-md-3">
      <DynamicForm :typeFields="typeFields" @drop="handleDrop" />
    </div>
  </div>
  <div><FormPreview :typeFields="typeFields" /></div>
</template>

<script setup>
import DynamicForm from "src/components/DynamicForm.vue";
import FormPreview from "src/components/FormPreview.vue";
import FormFields from "src/components/FormFields.vue";
import { ref } from "vue";

const typeFields = ref([]);

function handleDrop(label) {
  typeFields.value.push({ label, value: "", error: "" });
}
</script>

<style scoped>
.form-class {
  display: flex;
  flex-direction: row;
}
</style>
