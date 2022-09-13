<script>
  export let labelText;
  export let value;
</script>

<label class="display-block padding border-bottom">
  {labelText}
  <input
    on:change|preventDefault
    type="number"
    bind:value
    class="margin-only-left-1 input-number"
  />
</label>
