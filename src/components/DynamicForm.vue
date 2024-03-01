<template>
  <div>
    <q-card
      class="form-container q-pa-lg q-ma-lg"
      @drop="dropField"
      @dragover.prevent
    >
      <q-input
        outlined
        v-for="(field, index) in typeFields"
        :key="index"
        :placeholder="field.label"
        :class="{ 'invalid-input': field.error }"
        v-model="field.value"
      >
        <template v-slot:after>
          <q-btn round dense flat icon="delete" @click="removeField(index)" />
        </template>
      </q-input>
    </q-card>
  </div>
</template>

<script setup>
import { defineComponent, computed, ref } from "vue";
import draggable from "vuedraggable";
import DraggableFieldVue from "./DraggableField.vue";

const props = defineProps(["formFields"]);

const typeFields = ref([]);

function dropField(event) {
  const label = event.dataTransfer.getData("text/plain");
  if (label) {
    typeFields.value.push({ label, value: "", error: "" });
  }
}

function removeField(index) {
  typeFields.value.splice(index, 1);
}
</script>

<style scoped></style>
