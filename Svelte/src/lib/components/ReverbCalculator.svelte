<script>
  import arithmeticOperation from "../constants/arithmeticOperation.constants.js";
  import reverb from "../constants/reverb.constants.js";
  import MusicCalculator from "./MusicCalculator.svelte";

  export let calculatorOperation;
  export let tempo;
  export let valueOne;
  export let valueTwo;
  export let subtractionText;

  const preDelay = addParentheses(reverb.preDelay);
  const decay = addParentheses(reverb.decay);
  const totalReverb = addParentheses(reverb.totalReverb);

  $: labeledFormula = getLabeledFormula(
    calculatorOperation,
    valueOne,
    valueTwo,
    subtractionText
  );

  function getLabeledFormula(
    calculatorOperation,
    valueOne,
    valueTwo,
    subtractionText
  ) {
    const labeledFormula = {
      operator: calculatorOperation,
      operandLabelCombinations: [
        { operand: valueOne, label: preDelay },
        { operand: valueTwo, label: decay },
      ],
      label: totalReverb,
    };

    if (calculatorOperation === arithmeticOperation.subtraction) {
      labeledFormula.operandLabelCombinations[0].label = totalReverb;

      if (subtractionText === reverb.preDelay) {
        labeledFormula.operandLabelCombinations[1].label = preDelay;
        labeledFormula.label = decay;
      } else {
        labeledFormula.operandLabelCombinations[1].label = decay;
        labeledFormula.label = preDelay;
      }
    }

    return labeledFormula;
  }

  function addParentheses(string) {
    return `(${string})`;
  }
</script>

<MusicCalculator {tempo} {labeledFormula} />
