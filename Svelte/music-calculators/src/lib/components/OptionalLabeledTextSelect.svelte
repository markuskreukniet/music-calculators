<script>
  export let labelText = null;
  export let values;
  export let value;
  export let className = null;

  const name = values.toString();
</script>

<div class={className}>
  {#if labelText}
    <label for={name}>
      {labelText}
    </label>
  {/if}

  <select id={name} bind:value class="select">
    {#each values as x}
      <option value={x}>
        {x}
      </option>
    {/each}
  </select>
</div>
