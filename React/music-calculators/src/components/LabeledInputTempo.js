import React from "react";
import InputTempo from "./InputTempo.js";

class LabeledInputTempo extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.onChange(value);
  }

  render() {
    return (
      <label>
        {this.props.labelText}
        <InputTempo
          name={this.props.name}
          defaultValue={this.props.defaultValue}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default LabeledInputTempo;
