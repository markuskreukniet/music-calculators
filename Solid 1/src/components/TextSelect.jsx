export default function TextSelect(props) {
  // TODO: React project has useless this.className = "select";, and maybe also other projects
  // TODO: value onChange
  let selectClassName = "select";
  if (props.className) {
    selectClassName += ` ${props.className}`;
  }
  
  return (
    <select value={props.value} class={selectClassName}>
      <For each={props.values}>{(value, i) =>
        <option value={value}>
          {value}
        </option>
      }</For>
    </select>
  );
}
