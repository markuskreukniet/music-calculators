<script>
  export let textValueCombinations;
  export let value;

  $: name = getName(textValueCombinations);

  function getName(textValueCombinations) {
    let name = textValueCombinations?.[0]?.value;

    for (let i = 1; i < textValueCombinations?.length; i++) {
      name += `, ${textValueCombinations[i].value}`;
    }

    return name;
  }
</script>

<div>
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
</div>
