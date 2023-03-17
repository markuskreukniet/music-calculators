<script setup>
const emit = defineEmits(['value']);

const props = defineProps({
  labelText: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
});

function handleChange(e) {
  emit('value', e.target.value);
}
</script>

<template>
  <label class="display-block padding border-bottom">
    {{ labelText }}
    <input type="number" :value="value" @change.self.prevent="handleChange" class="margin-only-left-1 input-number" />
  </label>
</template>
