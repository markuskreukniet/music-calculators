<script>
  export let labelText = null;
  export let values;
  export let value;
  export let className = null;

  const name = values.toString();
</script>

<!-- The element is an OptionalLabeledTextSelect to handle the problem that a label should associate with a form control. -->

<div class={className}>
  {#if labelText}
    <label for={name}>
      {labelText}
    </label>
  {/if}

  <select id={name} on:change|preventDefault bind:value class="select">
    {#each values as x}
      <option value={x}>
        {x}
      </option>
    {/each}
  </select>
</div>
