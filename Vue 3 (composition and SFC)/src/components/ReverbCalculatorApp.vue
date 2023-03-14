<script setup>
import { ref } from 'vue'
import arithmeticOperation from '../constants/arithmeticOperation.constants.js';
import durations from '../constants/durations.constants.js';
import reverb from '../constants/reverb.constants.js';
import LabeledNumberInput from './LabeledNumberInput.vue';
import LabeledTextSelect from './LabeledTextSelect.vue';
import TextSelect from './TextSelect.vue';

//
const preDelayColon = addColon(reverb.preDelay);
const decayColon = addColon(reverb.decay);
const totalReverbColon = addColon(reverb.totalReverb);

const values = [preDelayColon, decayColon];
const textValueCombinations = [
  {
    text: 'The total reverb duration by choosing a duration for the pre-delay and decay',
    value: arithmeticOperation.addition,
  },
  {
    text: 'The pre-delay or decay duration by choosing a duration for the total reverb, and pre-delay or decay',
    value: arithmeticOperation.subtraction,
  },
];

const defaultValueSelect = '1/64 note';

const subtractionTextColon = preDelayColon;
const valueOne = defaultValueSelect;
const valueTwo = defaultValueSelect;
const durationResult = this._textValueCombinations[0].value;
const tempo = 128;

function addColon(string) {
  return `${string}:`;
}

function handleChangeTempo(e) {
  tempo = e;
}
//

const labelText = "labelText";
const value = "value 2";

const className = ref('testClass');

function handleChange(e) {
  console.log(e);

  className.value = "testClass testClass2";
}
</script>

<!-- TODO: two way bind is not needed on many places -->

<template>
  <LabeledNumberInput @value="handleChangeTempo" />

  <!-- -->

  <LabeledTextSelect :labelText="labelText" :values="values" :value="value" @value="handleChange"
    :className="className" />
  <TextSelect :values="values" :value="value" @value="handleChange" :className="className" />
</template>
