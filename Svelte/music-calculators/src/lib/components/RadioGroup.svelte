<script>
  export let textValueCombinations;
  export let value;

  let name = "";
  const length = textValueCombinations.length;

  if (length > 0) {
    name = textValueCombinations[0].value;
  }

  if (length > 1) {
    for (let i = 1; i < length; i++) {
      name += `, ${textValueCombinations[i].value}`;
    }
  }
</script>

<div>
  {#each textValueCombinations as combination}
    <label class="display-block">
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
