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

### Use the app in a web component example

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
