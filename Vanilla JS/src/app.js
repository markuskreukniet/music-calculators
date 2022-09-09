"use strict";

const scriptUrls = [
  "./src/components/LabeledNumberInput.js",
  "./src/components/ReverbCalculatorApp.js",
];

function includeScriptInHead(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");

    script.setAttribute("src", src);
    script.addEventListener("load", resolve);
    script.addEventListener("error", reject);

    document.head.appendChild(script);
  });
}

function App(parent) {
  let that = this;
  this.parent = parent;

  this.fetch = async function () {
    try {
      for (let url of scriptUrls) {
        await includeScriptInHead(url);
      }
    } catch (e) {
      console.log(e);
    }
  };
  this.create = function () {
    new ReverbCalculatorApp(that.parent);
  };
  this.init = async function () {
    await that.fetch();
    that.create();
  };
  this.init();
}

const app = document.querySelector("#app");
new App(app);
