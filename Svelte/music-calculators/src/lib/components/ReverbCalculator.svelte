<script>
  import arithmeticOperation from "../constants/arithmeticOperation.constants.js";
  import reverb from "../constants/reverb.constants.js";

  export let calculatorOperation;
  export let tempo;
  export let valueOne;
  export let valueTwo;
  export let subtractionText;

  const preDelay = addParentheses(reverb.preDelay);
  const decay = addParentheses(reverb.decay);
  const totalReverb = addParentheses(reverb.totalReverb);

  function addParentheses(string) {
    return `(${string})`;
  }
</script>

{calculatorOperation}
<hr />
{tempo}
<hr />
{valueOne}
<hr />
{valueTwo}
<hr />
{subtractionText}
