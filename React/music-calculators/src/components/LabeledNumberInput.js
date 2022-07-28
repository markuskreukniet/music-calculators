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
      <label className={"rowWithPaddingAndBorder"}>
        {this.props.labelText}
        <NumberInput
          name={this.props.name}
          defaultValue={this.props.defaultValue}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default LabeledNumberInput;
