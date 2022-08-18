<script>
  import app from "../constants/app.constants.js";

  export let labelText = app.emptyString;
  export let values;
  export let name;
  export let value;
</script>

{#if labelText !== app.emptyString}
  <label for={name}>
    {labelText}
  </label>
{/if}

<select id={name} {name} bind:value>
  {#each values as x}
    <option value={x}>
      {x}
    </option>
  {/each}
</select>
