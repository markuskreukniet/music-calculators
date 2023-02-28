<script setup>
const emit = defineEmits(['value'])

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
})

// TODO: needs to be a watcher?
// const selectClassName = computed(() => {
//   const result = "select";

//   if (className) {
//     result += ` ${className}`;
//   }

//   return result;
// })

function handleChange(e) {
  emit('value', e.target.value)
}
</script>

<template>
  <select :value="value" @change.self.prevent="handleChange">
    <option v-for="value in values" :key="value">{{value}}</option>
  </select>
</template>
