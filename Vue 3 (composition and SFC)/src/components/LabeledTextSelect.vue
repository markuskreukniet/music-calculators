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
  },
  className: {
    type: String,
    required: false
  }
});

function handleChange(e) {
  emit('value', e);
}
</script>

<template>
  <!-- TODO: empty className shows class attribute, maybe it is not a problem -->
  <label :class="className">
    {{ labelText }}
    <TextSelect :values="values" :value="value" @value="handleChange" />
  </label>
</template>
