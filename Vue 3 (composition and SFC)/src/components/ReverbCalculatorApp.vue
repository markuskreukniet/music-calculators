<script setup>
import TextSelect from './TextSelect.vue'

const values = ["value 1", "value 2"];
const test = "value 1";
</script>

<template>
  <TextSelect :values="values" :value="test" />
</template>
