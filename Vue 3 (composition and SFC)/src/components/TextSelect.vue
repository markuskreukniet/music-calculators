<script setup>
defineProps({
  value: {
    type: String,
    required: true
  },
  values: {
    type: Array,
    required: true
  },
  className: {
    type: String,
    required: false
  }
})

const className = "select";

function handleChange(e) {
  value = e.target.value
}
</script>

<template>
  <select :value="value" @change.self.prevent="handleChange">
    <option v-for="value in values" :key="value"></option>
  </select>
</template>
