<script>
  export let textValueCombinations;
  export let name;
  export let value;
</script>

{#each textValueCombinations as combination}
  <label>
    <input type="radio" bind:group={value} {name} value={combination.value} />
    {combination.text}
  </label>
{/each}
