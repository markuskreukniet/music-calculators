import { For } from 'solid-js';

export default function TextSelect(props) {
  let selectClassName = "select";
  if (props.className) {
    selectClassName += ` ${props.className}`;
  }

  return (
    <select value={props.value} class={selectClassName} onChange={e => props.onChange(e.target.value)}>
      <For each={props.values}>{value =>
        <option value={value}>
          {value}
        </option>
      }</For>
    </select>
  );
}
