<script>
  import app from "../constants/app.constants.js";

  export let labelText = app.emptyString;
  export let values;
  export let value;

  const name = values.toString();
</script>

{#if labelText !== app.emptyString}
  <label for={name}>
    {labelText}
  </label>
{/if}

<select id={name} bind:value>
  {#each values as x}
    <option value={x}>
      {x}
    </option>
  {/each}
</select>
