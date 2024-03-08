<template>
  <div class="q-ma-lg q-pa-md row">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Input Fields</div>
      </q-card-section>
      <q-card-section>
        <draggable-field
          v-for="field in formFields"
          :key="field.label"
          :label="field.label"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DraggableField from "./DraggableField.vue";

const formFields = ref([
  {
    label: "Text",
    type: "text",
  },
  {
    label: "Email",
    type: "email",
  },
  {
    label: "Phone Number",
    type: "integer",
  },
]);
</script>
