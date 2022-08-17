<script>
  export let labelText;
  export let value;
</script>

<label>
  {labelText}
  <input type="number" bind:value />
</label>
