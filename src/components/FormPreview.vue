<template>
  <div>
    <h3>Form Preview</h3>
    <q-form>
      <div v-for="(field, index) in formFields" :key="index">
        <label>{{ field.label }}</label>
        <q-input :type="field.type" :placeholder="field.placeholder" />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  props: {
    formFields: Array,
  },
};
</script>
