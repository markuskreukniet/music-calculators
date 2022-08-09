import React from "react";

import app from "../constants/app.constants.js";

class NumberInput extends React.Component {
  constructor(props) {
    super(props);

    this.value = this.props.defaultValue
      ? this.props.defaultValue
      : app.emptyString;

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.defaultValue) {
      this.onChange();
    }
  }

  handleChange(e) {
    e.preventDefault();

    this.value = e.target.value;
    this.onChange();
  }

  onChange() {
    this.props.onChange(this.value);
  }

  render() {
    return (
      <input
        type="number"
        name={this.props.name}
        value={this.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default NumberInput;
