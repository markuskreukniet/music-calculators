<script>
  import RadioGroup from "./RadioGroup.svelte";

  export let labelText;
  export let textValueCombinations;
  export let value;
</script>

<p>{labelText}</p>
<RadioGroup {textValueCombinations} bind:value />
