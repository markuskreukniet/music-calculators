<script setup>
import { computed } from 'vue';

const emit = defineEmits(['value']);

const props = defineProps({
  textValueCombinations: {
    type: Array,
    required: true
  },
  value: {
    type: String,
    required: true
  }
});

const name = computed(() => {
  let name = props.textValueCombinations?.[0]?.value;

  for (let i = 1; i < props.textValueCombinations?.length; i++) {
    name += `, ${props.textValueCombinations[i].value}`;
  }

  return name;
});

function handleChange(e) {
  emit('value', e.target.value);
}
</script>

<template>
  <label v-for="combination in textValueCombinations" :key="combination.value" class="display-block">
    <input type="radio" :name="name" :value="combination.value" :checked="combination.value === value"
      @change.self="handleChange" class="input-radio" />
    {{ combination.text }}
  </label>
</template>
