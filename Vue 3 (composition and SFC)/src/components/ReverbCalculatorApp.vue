<script setup>
import { ref } from 'vue'
import LabeledTextSelect from './LabeledTextSelect.vue';
import TextSelect from './TextSelect.vue';

const labelText = "labelText";
const values = ["value 1", "value 2"];
const value = "value 2";

const className = ref('testClass');

function handleChange(e) {
  console.log(e);

  className.value = "testClass testClass2";
}
</script>

<!-- TODO: two way bind is not needed on many places -->

<template>
  <LabeledTextSelect :labelText="labelText" :values="values" :value="value" @value="handleChange"
    :className="className" />
  <TextSelect :values="values" :value="value" @value="handleChange" :className="className" />
</template>
