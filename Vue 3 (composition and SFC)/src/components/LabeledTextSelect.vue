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
  <!-- An empty class attribute is an invalid HTML. https://stackoverflow.com/questions/30748847/is-an-empty-class-attribute-valid-html -->
  <!-- The copy and paste is probably the cleanest solution since partial rendering is only possible with components. https://vuejs.org/guide/essentials/template-syntax.html#raw-html -->
  <label v-if="className" :class="className">
    {{ labelText }}
    <TextSelect :values="values" :value="value" @value="handleChange" />
  </label>

  <label v-else>
    {{ labelText }}
    <TextSelect :values="values" :value="value" @value="handleChange" />
  </label>
</template>
