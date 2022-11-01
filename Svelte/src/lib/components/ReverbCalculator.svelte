<script>
  import app from "../constants/app.constants.js";
  import arithmeticOperation from "../constants/arithmeticOperation.constants.js";
  import reverb from "../constants/reverb.constants.js";

  import Calculator from "./Calculator.svelte";

  export let calculatorOperation;
  export let tempo;
  export let valueOne;
  export let valueTwo;
  export let subtractionText;

  const preDelay = addParentheses(reverb.preDelay);
  const decay = addParentheses(reverb.decay);
  const totalReverb = addParentheses(reverb.totalReverb);

  let valueOneText = app.emptyString;
  let valueTwoText = app.emptyString;
  let resultTextPart = app.emptyString;

  $: setCalculatorValues(calculatorOperation, subtractionText);

  function setCalculatorValues(calculatorOperation, subtractionText) {
    switch (calculatorOperation) {
      case arithmeticOperation.addition:
        valueOneText = preDelay;
        valueTwoText = decay;
        resultTextPart = totalReverb;

        break;
      case arithmeticOperation.subtraction:
        valueOneText = totalReverb;

        if (subtractionText === reverb.preDelay) {
          valueTwoText = preDelay;
          resultTextPart = decay;
        } else {
          valueTwoText = decay;
          resultTextPart = preDelay;
        }

        break;
    }
  }

  function addParentheses(string) {
    return `(${string})`;
  }
</script>

<Calculator
  {tempo}
  {valueOne}
  {valueTwo}
  {valueOneText}
  {valueTwoText}
  {resultTextPart}
  {calculatorOperation}
/>
