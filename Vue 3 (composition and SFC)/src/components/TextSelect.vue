<script setup>
import { computed } from 'vue';

const emit = defineEmits(['value']);

const props = defineProps({
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
});

const selectClassName = computed(() => {
  let result = "select";

  if (props.className) {
    result += ` ${props.className}`;
  }

  return result;
});

function handleChange(e) {
  emit('value', e.target.value);
}
</script>

<template>
  <select :value="value" @change.self.prevent="handleChange" :class="selectClassName">
    <option v-for="value in values" :key="value">{{ value }}</option>
  </select>
</template>
