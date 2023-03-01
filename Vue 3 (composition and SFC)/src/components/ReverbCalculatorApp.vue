<script setup>
import LabeledTextSelect from './LabeledTextSelect.vue';
import TextSelect from './TextSelect.vue';

const labelText = "labelText";
const values = ["value 1", "value 2"];
const value = "value 2";
const className = "testClass";

function handleChange(e) {
  console.log(e);
}
</script>

<template>
  <LabeledTextSelect :labelText="labelText" :values="values" :value="value" @value="handleChange"
    :className="className" />
  <TextSelect :values="values" :value="value" @value="handleChange" :className="className" />
</template>
