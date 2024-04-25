<template>
  <q-page class="q-ma-md">
    <h4>Disposition Criteria - Professionalism and Competency</h4>
    <p class="q-ma-sm">
      Please evaluate the CSULB student by checking ONE of the appropriate
      performance expectations or unacceptable behaviors that apply under Met or
      Not Met. Please support the evaluation with comments and/or
      recommendations. "If the CSULB Student does not meet criteria in any of
      the categories, the candidate is required to reflect on Not Met criteria,
      explaining next steps to achieve Met standards by providing a written
      explanation to successfully complete rotation.
    </p>
    <q-table
      :rows="rows"
      :columns="columns"
      separator="none"
      :pagination="{ rowsPerPage: 10 }"
      dense
    >
      <template v-slot:body-cell="props">
        <q-td :props="props">
          <q-td>{{ props.row.name }}</q-td>
          <div v-if="saveButtonClicked === true">
            <p v-if="!selectedCriteria[props.rowIndex].value" class="warning">
              This field is required*
            </p>
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-met="props">
        <q-td :props="props">
          <q-radio v-model="selectedCriteria[props.rowIndex].value" val="Met" />
        </q-td>
      </template>
      <template v-slot:body-cell-notmet="props">
        <q-td :props="props">
          <q-radio
            v-model="selectedCriteria[props.rowIndex].value"
            val="Not Met"
          />
        </q-td>
      </template>
    </q-table>
    <div>
      <q-btn @click="clickButton">Save</q-btn>
      <h4>Generated Schema</h4>
      <pre v-for="criteria in selectedCriteria" :key="criteria">{{
        criteria
      }}</pre>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const saveButtonClicked = ref(false);

function clickButton() {
  saveButtonClicked.value = true;
}

const columns = [
  {
    name: "criteria",
    required: true,
    label: "",
    // field: (row) => row.name,
    align: "left",
  },
  {
    name: "met",
    align: "center",
    label: "Met(Performance Expectations)",
  },
  {
    name: "notmet",
    align: "center",
    label: "Not Met(Unexpected Behaviours)",
  },
];

const rows = [
  {
    id: 1,
    name: "Promptness: Timeliness in first contact: Punctuality in attendance",
  },
  {
    id: 2,
    name: "Responsibility: Consistency in schedule and work",
  },
  {
    id: 3,
    name: "Honoring school setting: Compliance with school policies; Displays legal and ethical conduct; and, observing confidentiality at all times",
  },
  {
    id: 4,
    name: "Representing the university: Respectful in professional language, behavior, and appearance. No use of social media in the schooling context at any time.",
  },
  {
    id: 5,
    name: "Communication Skills: University-level language in email, phone contact, and in person",
  },
  {
    id: 6,
    name: "Working with Diverse Populations: Respect and demonstrates insightfulness for all students, various backgrounds, abilities, and orientations",
  },
  {
    id: 7,
    name: "Collaboration: Willing contribution to classroom environment and learning opportunities",
  },
  {
    id: 8,
    name: "Knowledge: Application of course content and best practices; reflection on learning",
  },
  {
    id: 9,
    name: "OVERALL FINAL EVAULATION",
  },
];

const selectedCriteria = ref([]);
rows.forEach((row) => {
  selectedCriteria.value.push({
    criteria: row.name,
    value: "",
  });
});
</script>

<style scoped>
.warning {
  color: red;
  padding-left: 10px;
  margin-left: 10px;
}
</style>
