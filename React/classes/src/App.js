import style from "./style.js";

import ReverbCalculatorApp from "./components/ReverbCalculatorApp.js";

function App() {
  // If there is a shadow dom, the style element gets appended outside of it.
  var element = document.createElement("style");
  element.innerHTML = style;
  document.body.appendChild(element);

  return <ReverbCalculatorApp />;
}

export default App;
