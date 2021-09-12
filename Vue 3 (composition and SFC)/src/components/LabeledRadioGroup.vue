<script setup>
import RadioGroup from './RadioGroup.vue';

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
  textValueCombinations: {
    type: Array,
    required: true
  }
});

function handleChange(e) {
  emit('value', e);
}
</script>

<template>
  <div className="display-block padding border-bottom">
    <p className="text-before-list">{{ props.labelText }}</p>
    <RadioGroup :textValueCombinations="textValueCombinations" :value="value" @value="handleChange" />
  </div>
</template>
