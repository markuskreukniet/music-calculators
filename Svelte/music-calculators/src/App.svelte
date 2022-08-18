<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";

  import arithmeticOperation from "./lib/constants/arithmeticOperation.constants.js";

  import LabeledNumberInput from "./lib/components/LabeledNumberInput.svelte";
  import LabeledRadioGroup from "./lib/components/LabeledRadioGroup.svelte";

  const textValueCombinations = [
    {
      text: "The total reverb duration by choosing a duration for the pre-delay and decay",
      value: arithmeticOperation.addition,
    },
    {
      text: "The pre-delay or decay duration by choosing a duration for the total reverb, and pre-delay or decay",
      value: arithmeticOperation.subtraction,
    },
  ];

  let value = 10;
  let LabeledRadioGroupValue = arithmeticOperation.addition;
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <LabeledNumberInput labelText={"labelText"} bind:value />
  value: {value}

  <LabeledRadioGroup
    name={"name"}
    labelText={"LabeledRadioGroup"}
    bind:value={LabeledRadioGroupValue}
    {textValueCombinations}
  />
  LabeledRadioGroupValue: {LabeledRadioGroupValue}

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank"
      >SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
