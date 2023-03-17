<script setup>
import MusicCalculator from './MusicCalculator.vue';

const props = defineProps({
  calculatorOperation: {
    type: Array,
    required: true
  },
  tempo: {
    type: String,
    required: true
  },
  valueOne: {
    type: String,
    required: true
  },
  valueTwo: {
    type: String,
    required: true
  },
  subtractionText: {
    type: String,
    required: true
  }
});

const preDelay = addParentheses(reverb.preDelay);
const decay = addParentheses(reverb.decay);
const totalReverb = addParentheses(reverb.totalReverb);

function addParentheses(string) {
  return `(${string})`;
}

function getLabeledFormula() {
  const labeledFormula = {
    operator: props.calculatorOperation,
    operandLabelCombinations: [
      { operand: props.valueOne, label: preDelay },
      { operand: props.valueTwo, label: decay },
    ],
    label: totalReverb,
  };

  if (props.calculatorOperation === arithmeticOperation.subtraction) {
    labeledFormula.operandLabelCombinations[0].label = totalReverb;

    if (props.subtractionText === reverb.preDelay) {
      labeledFormula.operandLabelCombinations[1].label = preDelay;
      labeledFormula.label = decay;
    } else {
      labeledFormula.operandLabelCombinations[1].label = decay;
      labeledFormula.label = preDelay;
    }
  }

  return labeledFormula;
}
</script>

<template>
  <MusicCalculator :tempo="tempo" :labeledFormula="getLabeledFormula()" />
</template>
