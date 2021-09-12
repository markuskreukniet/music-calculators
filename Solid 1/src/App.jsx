import logo from './logo.svg';
import styles from './App.module.css';

import { createSignal } from "solid-js";

import LabeledNumberInput from "./components/LabeledNumberInput";
import TextSelect from "./components/TextSelect";

function App() {
  const [value, setValue] = createSignal("0 ms");

  const durations = [
    "0 ms",
    "0.1 ms",
    "1 ms",
    "10 ms",
    "30 ms",
  ];

  // TODO: onChange instead of onValue, also in other projects
  // TODO: inline arrow functions also in other projects

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>

      <LabeledNumberInput value="testValue" />

      <TextSelect values={durations} value={value()} onChange={value => setValue(value)} />
    </div>
  );
}

export default App;
