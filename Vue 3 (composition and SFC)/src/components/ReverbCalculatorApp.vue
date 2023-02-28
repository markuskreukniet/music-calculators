<script setup>
import { ref } from 'vue'
import TextSelect from './TextSelect.vue'

const values = ["value 1", "value 2"];
const value = ref("value 1");

function handleChange(e) {
  console.log(e);
}
</script>

<template>
  <TextSelect :values="values" :value="value" @value="handleChange" />
</template>
