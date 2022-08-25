<script>
  export let labelText;
  export let value;
</script>

<label class="display-block padding border-bottom">
  {labelText}
  <input type="number" bind:value />
</label>
