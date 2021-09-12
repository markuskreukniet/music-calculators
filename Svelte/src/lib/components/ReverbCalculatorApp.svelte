<script>
  import arithmeticOperation from "../constants/arithmeticOperation.constants.js";
  import durations from "../constants/durations.constants.js";
  import reverb from "../constants/reverb.constants.js";
  import OptionalLabeledTextSelect from "./OptionalLabeledTextSelect.svelte";
  import LabeledNumberInput from "./LabeledNumberInput.svelte";
  import LabeledRadioGroup from "./LabeledRadioGroup.svelte";
  import ReverbCalculator from "./ReverbCalculator.svelte";

  const preDelayColon = addColon(reverb.preDelay);
  const decayColon = addColon(reverb.decay);
  const totalReverbColon = addColon(reverb.totalReverb);

  const values = [preDelayColon, decayColon];
  const textValueCombinations = [
    {
      text: "The total reverb duration by choosing a duration for the pre-delay and decay",
      value: arithmeticOperation.addition,
    },
    {
      text: "The pre-delay or decay duration by choosing a duration for the total reverb, and pre-delay or decay",
      value: arithmeticOperation.subtraction,
    },
  ];

  const defaultValueSelect = "1/64 note";

  let tempo = 128;
  let durationResult = textValueCombinations[0].value;
  let valueOne = defaultValueSelect;
  let valueTwo = defaultValueSelect;
  let subtractionTextColon = preDelayColon;

  $: subtractionText =
    subtractionTextColon === preDelayColon ? reverb.preDelay : reverb.decay;

  const child2MarginOnlyLeft = "child-2-margin-only-left-1";
  const marginOnlyLeft = "margin-only-left-1";

  function addColon(string) {
    return `${string}:`;
  }
</script>

<div>
  <LabeledNumberInput labelText={"Tempo in BPM:"} bind:value={tempo} />
  <LabeledRadioGroup
    labelText={"Calculate in ms:"}
    bind:value={durationResult}
    {textValueCombinations}
  />

  <div class="display-flex align-items-center padding border-bottom">
    {#if durationResult === arithmeticOperation.addition}
      <OptionalLabeledTextSelect
        labelText={preDelayColon}
        bind:value={valueOne}
        values={durations}
        className={child2MarginOnlyLeft}
      />
      <p class={marginOnlyLeft}>+</p>
      <OptionalLabeledTextSelect
        labelText={decayColon}
        bind:value={valueTwo}
        values={durations}
        className={`${child2MarginOnlyLeft} ${marginOnlyLeft}`}
      />
    {:else}
      <OptionalLabeledTextSelect
        labelText={totalReverbColon}
        bind:value={valueOne}
        values={durations}
        className={child2MarginOnlyLeft}
      />
      <p class={marginOnlyLeft}>-</p>
      <OptionalLabeledTextSelect
        bind:value={subtractionTextColon}
        {values}
        className={marginOnlyLeft}
      />
      <OptionalLabeledTextSelect
        bind:value={valueTwo}
        values={durations}
        className={marginOnlyLeft}
      />
    {/if}
  </div>

  <ReverbCalculator
    calculatorOperation={durationResult}
    {tempo}
    {valueOne}
    {valueTwo}
    {subtractionText}
  />
</div>
