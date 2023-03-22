<script setup>
import { computed, reactive } from 'vue';
import arithmeticOperation from '../constants/arithmeticOperation.constants.js';
import durations from '../constants/durations.constants.js';
import reverb from '../constants/reverb.constants.js';
import LabeledNumberInput from './LabeledNumberInput.vue';
import LabeledRadioGroup from './LabeledRadioGroup.vue';
import LabeledTextSelect from './LabeledTextSelect.vue';
import ReverbCalculator from "./ReverbCalculator.vue";
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

// I choose one reactive object instead of multiple refs since the calculator needs the whole reactive object to calculate an answer.
// https://vuejs.org/guide/essentials/reactivity-fundamentals.html
const state = reactive({
  subtractionTextColon: preDelayColon,
  valueOne: defaultValueSelect,
  valueTwo: defaultValueSelect,
  durationResult: textValueCombinations[0].value,
  tempo: 128
});

const subtractionText = computed(() => {
  return state.subtractionTextColon === preDelayColon ? reverb.preDelay : reverb.decay;
});

const child1MarginOnlyLeft = "child-1-margin-only-left-1";
const marginOnlyLeft = "margin-only-left-1";

function addColon(string) {
  return `${string}:`;
}

function handleChangeTempo(e) {
  state.tempo = e;
}

function handleChangeDurationResult(e) {
  state.durationResult = e;
}

function handleChangeValueOne(e) {
  state.valueOne = e;
}

function handleChangeValueTwo(e) {
  state.valueTwo = e;
}

function handleChangeSubtractionTextColon(e) {
  state.subtractionTextColon = e;
}
</script>

<template>
  <LabeledNumberInput labelText="Tempo in BPM:" :value="state.tempo" @value="handleChangeTempo" />
  <LabeledRadioGroup labelText="Calculate in ms:" :textValueCombinations="textValueCombinations"
    :value="state.durationResult" @value="handleChangeDurationResult" class="display-block padding border-bottom" />
  <div class="display-flex align-items-center padding border-bottom">
    <template v-if="state.durationResult === arithmeticOperation.addition">
      <LabeledTextSelect :labelText="preDelayColon" :values="durations" :value="state.valueOne"
        @value="handleChangeValueOne" :className="child1MarginOnlyLeft" />
      <p :class="marginOnlyLeft">+</p>
      <LabeledTextSelect :labelText="decayColon" :values="durations" :value="state.valueTwo" @value="handleChangeValueTwo"
        :class="`${child1MarginOnlyLeft} ${marginOnlyLeft}`" />
    </template>
    <template v-else>
      <LabeledTextSelect :labelText="totalReverbColon" :values="durations" :value="state.valueOne"
        @value="handleChangeValueOne" :className="child1MarginOnlyLeft" />
      <p :class="marginOnlyLeft">-</p>
      <TextSelect :values="values" :value="state.subtractionTextColon" @value="handleChangeSubtractionTextColon"
        :className="marginOnlyLeft" />
      <TextSelect :values="durations" :value="state.valueTwo" @value="handleChangeValueTwo" :className="marginOnlyLeft" />
    </template>
  </div>
  <ReverbCalculator :calculatorOperation="state.durationResult" :tempo="state.tempo" :valueOne="state.valueOne"
    :valueTwo="state.valueTwo" :subtractionText="subtractionText" />
</template>
