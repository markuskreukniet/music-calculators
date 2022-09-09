function App(parent) {
  let that = this;
  this.parent = parent;

  this.fetch = async function () {
    try {
      await includeScriptInHead("./src/components/ReverbCalculatorApp.js");
    } catch (e) {
      console.log(e);
    }
  };
  this.create = function () {
    ReverbCalculatorApp(that.parent);
  };
  this.init = async function () {
    await that.fetch();
    that.create();
  };
  this.init();
}

function includeScriptInHead(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");

    script.setAttribute("src", src);
    script.addEventListener("load", resolve);
    script.addEventListener("error", reject);

    document.head.appendChild(script);
  });
}

let app = document.querySelector("#app");
App(app);
