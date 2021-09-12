<script>
  export let labelText;
  export let value;
</script>

<!-- We don't need to convert an event value from string to number in Svelte. https://svelte.dev/tutorial/numeric-inputs -->
<label class="display-block padding border-bottom">
  {labelText}
  <input
    on:change|preventDefault
    type="number"
    bind:value
    class="margin-only-left-1 input-number"
  />
</label>
