// TODO: example code component logic in readme
// TODO: shorten code where possible
// TODO: try to make custom element of this app, maybe with giving style tag an id and adding styles to it

"use strict";

let app = {};
let arithmeticOperation = {};
let durations = {};
let reverb = {};

const scriptUrls = [
  "./src/components/LabeledNumberInput.js",
  "./src/components/LabeledRadioGroup.js",
  "./src/components/LabeledTextSelect.js",
  "./src/components/RadioGroup.js",
  "./src/components/ReverbCalculator.js",
  "./src/components/ReverbCalculatorApp.js",
  "./src/components/TextSelect.js",
];

function includeScriptInHead(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script"); // TODO: change to createElementAppendChild?

    script.setAttribute("src", src);
    script.addEventListener("load", resolve);
    script.addEventListener("error", reject);

    document.head.appendChild(script);
  });
}

function createElementAppendChild(element, parent) {
  const result = document.createElement(element);
  parent.appendChild(result);

  return result;
}

function App(parent) {
  let that = this;
  this.parent = parent;

  this.fetch = async function () {
    try {
      import("./constants/app.constants.js").then((module) => {
        app = module.default;
      });
      import("./constants/arithmeticOperation.constants.js").then((module) => {
        arithmeticOperation = module.default;
      });
      import("./constants/durations.constants.js").then((module) => {
        durations = module.default;
      });
      import("./constants/reverb.constants.js").then((module) => {
        reverb = module.default;
      });
    } catch (e) {
      console.log(e);
    }

    try {
      for (const url of scriptUrls) {
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

const appElement = document.querySelector("#app");
new App(appElement);
