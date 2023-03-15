<script setup>
import TextAndTextSelect from './TextAndTextSelect.vue';

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
  <!-- Even when className is null or undefined, the class attribute stays. -->
  <!-- Extra component TextAndTextSelect is probably the cleanest solution since partial rendering is only possible with components. https://vuejs.org/guide/essentials/template-syntax.html#raw-html -->
  <!-- Another solution would be to change this component to an OptionalLabeledTextSelect component. In other projects, the OptionalLabeledTextSelect always receives a className. -->
  <label v-if="className" :class="className">
    <TextAndTextSelect :labelText="labelText" :values="values" :value="value" @value="handleChange" />
  </label>

  <label v-else>
    <TextAndTextSelect :labelText="labelText" :values="values" :value="value" @value="handleChange" />
  </label>
</template>
