# music-calculators

Vanilla JS is outdated

React doesn't use Hooks

## Run and build projects
Run the React project with: npm start

React project to production build: npm run build

Run the Svelte project with: npm run dev

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

### Use the app in a web component example (web component part might not work)

```
<!DOCTYPE html>
<html>
  <head>
    <title>Hello React</title>
  </head>
  <body>
    <script>
      const template = document.createElement("template");
      template.innerHTML = `
      <style>
      </style>

      <slot></slot>
      `;

      class MusicCalculators extends HTMLElement {
        constructor() {
          super();
          const root = this.attachShadow({ mode: "closed" });
          root.appendChild(template.content.cloneNode(true));
        }
      }

      window.customElements.define("music-calculators", MusicCalculators);
    </script>

    <music-calculators><div id="root"></div></music-calculators>
    <script src="./static/js/main.2c45bfbe.js"></script>
  </body>
</html>
```

## Good to know for the Svelte project

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Svelte</title>
    <!-- The defer attribute only works with the src attribute. With an inline script, the script should come under <div id="app"></div> -->
    <script defer src="assets/index.2b4a1211.js"></script>
  </head>
  <body>
    <div id="app"></div>
    
  </body>
</html>
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

Counter.svelte
```
<!-- velte:options here might be needed, depends on vite.config.js -->
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
