<script>
  import RadioGroup from "./RadioGroup.svelte";

  export let labelText;
  export let textValueCombinations;
  export let value;
</script>

<div class="display-block padding border-bottom">
  <p class="text-before-list">{labelText}</p>
  <RadioGroup {textValueCombinations} bind:value />
</div>
