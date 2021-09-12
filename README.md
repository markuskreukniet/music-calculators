# music-calculators

Vanilla JS is outdated

React doesn't use Hooks

## Run and build projects
Run the React project with: npm start

React project to production build: npm run build

Run the Svelte project with: npm run dev

## Good to know for the Vanilla JS project

took logic from:
https://javascript.plainenglish.io/create-a-pwa-from-scratch-with-vanilla-javascript-c726c5b2f9e0

```
function ComponentName(parent) {
  let that = this;
  this.parent = parent;
  this.componentId = "componentId";
  this.styling = `
    .`+that.componentId+`{position:relative;}
    .`+that.componentId+`-inner{width:100%;}
  `;

  this.fetch = async function(){
    // async operations, such as query data from DB
  }
  this.stylize = function(){
   // create a <style> node and set its id to that.componentId
   // set the content of the <style> node to that.styling
   // then append it to the DOM
   // (or overwrite the content of an existing <style> with the same ID)
  }
  this.create = function(){
   // create a new container for the component
   // append it to that.parent
   // store it as that.element
  }
  this.render = function(){
   // empty that.element and recreate its content
  }
  this.init = async function(){
    await that.fetch();
    that.stylize();
    that.create();
    that.render();
  }
  // initialize
  this.init();
}
```

## Good to know for the React project

### Export to one single js, src/index.js example

```
import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
```

**OR (optional)** add to plugins: in node_modules/react-scripts/config/webpack.config.js
```
isEnvProduction &&
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      }),
```

## Good to know for the Svelte project

Compiled javascript of Svelte between script tags might interfere with other javascript, such as the javascript from WordPress. A solution is to place the Svelte javascript between {}.

```
<div id="app"></div>
    
<script>
{
// place javascript content here
}
</script>
```

### disiable minify

```
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [svelte()],
});
```

### Use the app in a web component (custom element) example

```
<template id="the-template">
  <script>
    window.onload = function(){
      // the javascript
    };
  </script>

  <slot></slot>
</template>

<script>
  class MusicCalculators extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: "closed" });
      let template = document.querySelector('#the-template');
      root.appendChild(template.content.cloneNode(true));
    }
  }

  window.customElements.define("music-calculators", MusicCalculators);
</script>

<music-calculators><div id="app">app</div></music-calculators>
```

### Svelte as custom element

vite.config.js (choose the comment svelte config, or the not commented)
```
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // svelte({
    //   compilerOptions: {
    //     customElement: true,
    //   },
    // }),
    svelte({
      compilerOptions: { customElement: true },
      include: /\.wc\.svelte$/,
    }),
    svelte({
      compilerOptions: { customElement: false },
      exclude: /\.wc\.svelte$/,
    }),
  ],
});

```

index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Svelte</title>
  </head>
  <body>
    <!-- test-tag is only name, not a self made custom element -->
    <test-tag id="app"></test-tag>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

main.js
```
//import './app.css'
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
```

App.svelte
```
<svelte:options tag="web-component" />

<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
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
```

Counter.svelte (velte:options here might be needed, depends on vite.config.js)
```
<svelte:options tag="my-counter" />

<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment}>
  count is {count}
</button>
```
