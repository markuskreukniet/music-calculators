// TODO: example code component logic in readme
// TODO: shorten code where possible
// TODO: try to make custom element of this app, maybe with giving style tag an id and adding styles to it

// TODO: refactor

// TODO: BPM change only happens with clicking outside input

"use strict";

let app = {};
let arithmeticOperation = {};
let durations = {};
let reverb = {};

function includeScriptInHead(src) {
  return new Promise((resolve, reject) => {
    const script = createElementAppendChild("script", document.head);

    script.setAttribute("src", src);
    script.addEventListener("load", resolve);
    script.addEventListener("error", reject);
  });
}

function createElementAppendChild(element, parent) {
  const result = document.createElement(element);
  parent.appendChild(result);

  return result;
}

function createElementAppendChildWithClassName(element, parent, className) {
  const result = createElementAppendChild(element, parent);
  result.className = className;

  return result;
}

function App(parent) {
  let that = this;
  this.parent = parent;

  this.fetch = async function () {
    function importDefaultModule(moduleName) {
      return new Promise((resolve) => {
        import(moduleName).then((module) => {
          resolve(module.default);
        });
      });
    }

    const scriptUrls = [
      "./src/components/Calculator.js",
      "./src/components/LabeledNumberInput.js",
      "./src/components/LabeledRadioGroup.js",
      "./src/components/LabeledTextSelect.js",
      "./src/components/RadioGroup.js",
      "./src/components/ReverbCalculator.js",
      "./src/components/ReverbCalculatorApp.js",
      "./src/components/TextSelect.js",
    ];

    try {
      const importApp = importDefaultModule("./constants/app.constants.js");
      const importArithmeticOperation = importDefaultModule(
        "./constants/arithmeticOperation.constants.js"
      );
      const importDurations = importDefaultModule(
        "./constants/durations.constants.js"
      );
      const importReverb = importDefaultModule(
        "./constants/reverb.constants.js"
      );
      const importStyle = importDefaultModule("./style.js");

      app = await importApp;
      arithmeticOperation = await importArithmeticOperation;
      durations = await importDurations;
      reverb = await importReverb;
      that.style = await importStyle;

      const promises = scriptUrls.map((x) => {
        return includeScriptInHead(x);
      });

      await Promise.all(promises);
    } catch (e) {
      console.log(e);
    }
  };
  this.create = function () {
    // If there is a shadow dom, the style element gets appended outside of it.
    var element = document.createElement("style");
    element.innerHTML = that.style;
    document.body.appendChild(element);

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
