import React from "react";
import NumberInput from "./NumberInput.js";

class LabeledNumberInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.onChange(value);
  }

  render() {
    return (
      <label className={"display-block padding border-bottom"}>
        {this.props.labelText}
        <NumberInput value={this.props.value} onChange={this.handleChange} />
      </label>
    );
  }
}

export default LabeledNumberInput;
