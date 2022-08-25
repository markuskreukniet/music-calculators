<script>
  import svelteLogo from "./assets/svelte.svg";

  import style from "./lib/style.js";

  import Counter from "./lib/Counter.svelte";

  import ReverbCalculatorApp from "./lib/components/ReverbCalculatorApp.svelte";

  // If there is a shadow dom, the style element gets appended outside of it.
  var element = document.createElement("style");
  element.innerHTML = style;
  document.body.appendChild(element);
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

  <!-- TODO: every Svelte element is/returns one element -->
  <!-- Faking the HTML <body> tag. -->
  <div id="body">
    <ReverbCalculatorApp />
  </div>

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
