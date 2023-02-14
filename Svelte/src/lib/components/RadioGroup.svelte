<script>
  export let textValueCombinations;
  export let value;

  let name = textValueCombinations?.[0]?.value;

  for (let i = 1; i < textValueCombinations?.length; i++) {
    name += `, ${textValueCombinations[i].value}`;
  }
</script>

<div>
  {#if textValueCombinations?.length > 0}
    {#each textValueCombinations as combination}
      <label class="display-block">
        <!-- on:change|preventDefault is not needed -->
        <input
          class="input-radio"
          type="radio"
          bind:group={value}
          {name}
          value={combination.value}
        />
        {combination.text}
      </label>
    {/each}
  {/if}
</div>
