<script setup>
import TextSelect from './TextSelect.vue';

const emit = defineEmits(['value']);

const props = defineProps({
  labelText: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  values: {
    type: Array,
    required: true
  }
});

function handleChange(e) {
  emit('value', e);
}
</script>

<template>
  {{ labelText }}
  <TextSelect :values="values" :value="value" @value="handleChange" />
</template>
