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

const selectClassName = computed(() => {
  const result = "select";

  if (className) {
    result += ` ${className}`;
  }

  return result;
})

function handleChange(e) {
  value = e.target.value
}
</script>

<template>
  <select :value="value" :class="selectClassName" @change.self.prevent="handleChange">
    <!-- TODO: check if option can be shortened -->
    <option v-for="value in values" :key="value"></option> 
  </select>
</template>
