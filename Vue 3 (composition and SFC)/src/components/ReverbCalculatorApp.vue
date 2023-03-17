<script setup>
import arithmeticOperation from '../constants/arithmeticOperation.constants.js';
import durations from '../constants/durations.constants.js';
import reverb from '../constants/reverb.constants.js';
import LabeledNumberInput from './LabeledNumberInput.vue';
import LabeledRadioGroup from './LabeledRadioGroup.vue';
import LabeledTextSelect from './LabeledTextSelect.vue';
import TextSelect from './TextSelect.vue';

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
const durationResult = textValueCombinations[0].value;
const tempo = 128;

const child1MarginOnlyLeft = "child-1-margin-only-left-1";
const marginOnlyLeft = "margin-only-left-1";

function addColon(string) {
  return `${string}:`;
}

function handleChangeTempo(e) {
  tempo = e;
}

function handleChangeDurationResult(e) {
  durationResult = e;
}

function handleChangeValueOne(e) {
  valueOne = e.detail;
}

function handleChangeValueTwo(e) {
  valueTwo = e.detail;
}
</script>

<template>
  <LabeledNumberInput labelText="Tempo in BPM:" :value="tempo" @value="handleChangeTempo" />
  <LabeledRadioGroup labelText="Calculate in ms:" :textValueCombinations="textValueCombinations" :value="durationResult"
    @value="handleChangeDurationResult" class="display-block padding border-bottom" />
  <div class="display-flex align-items-center padding border-bottom">
    <template v-if="durationResult === arithmeticOperation.addition">
      <LabeledTextSelect :labelText="preDelayColon" :values="durations" :value="valueOne" @value="handleChangeValueOne"
        :className="child1MarginOnlyLeft" />
      <p :class="marginOnlyLeft">+</p>
      <LabeledTextSelect :labelText="decayColon" :values="durations" :value="valueTwo" @value="handleChangeValueTwo"
        :class="`${child1MarginOnlyLeft} ${marginOnlyLeft}`" />
    </template>
    <template v-else>
      <p :class="marginOnlyLeft">-</p>
    </template>
  </div>
</template>
