<template>
  <div class="q-ma-lg row form-preview">
    <h3>Form Preview</h3>
    <q-card class="q-pa-lg col-6">
      <q-input
        outlined
        v-for="(field, index) in typeFields"
        :key="index"
        :placeholder="field.label"
        :class="{ 'invalid-input': field.error }"
        v-model="field.value"
      >
      </q-input>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["typeFields"]);

const typeFields = ref(props.typeFields);
</script>

<style scoped>
.form-preview {
  border: 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
