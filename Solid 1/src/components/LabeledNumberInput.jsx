import { mergeProps } from "solid-js";

export default function LabeledNumberInput(props) {
  const merged = mergeProps({ value: "Hi" }, props);

  return <div>{merged.value}</div>
}