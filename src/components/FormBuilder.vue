<template>
  <div class="form-builder">
    <div class="draggable-container">
      <draggable-field v-for="field in draggableFields" :key="field.label" :label="field.label" />
    </div>
    <div class="form-container" @drop="dropField" @dragover.prevent>
      <input
        v-for="(field, index) in formFields"
        :key="index"
        :placeholder="field.label"
        :class="{ 'invalid-input': field.error }"
        v-model="field.value"
      />
    </div>
  </div>
</template>

<script>
import DraggableField from './DraggableField.vue';

export default {
  components: {
    DraggableField,
  },
  data() {
    return {
      draggableFields: [
        { label: 'Text Field' },
        { label: 'Email Field' },
        { label: 'Phone Number Field' },
        // { label: 'Number Field' },
        // Add more field types as needed
      ],
      formFields: [],
    };
  },
  methods: {
    dropField(event) {
      const label = event.dataTransfer.getData('text/plain');
      if (label) {
        this.formFields.push({ label, value: '', error: '' });
      }
    },
    validateEmail(email) {
      // Basic email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    validatePhoneNumber(phoneNumber) {
      // Basic phone number validation regex (10 digits)
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phoneNumber);
    },
  },
  watch: {
    formFields: {
      deep: true,
      handler(fields) {
        fields.forEach(field => {
          if (field.label === 'Email Field') {
            field.error = !this.validateEmail(field.value);
          } else if (field.label === 'Phone Number Field') {
            field.error = !this.validatePhoneNumber(field.value);
          } else {
            field.error = false;
          }
        });
      },
    },
  },
};
</script>

<style>
.form-builder {
  display: flex;
}

.draggable-container {
  width: 200px;
}

.form-container {
  flex: 1;
  padding: 20px;
  border: 1px dashed #ccc;
}

.invalid-input {
  border: 1px solid red;
}
</style>
