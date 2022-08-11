import React from "react";

import app from "../constants/app.constants.js";

class TextSelect extends React.Component {
  constructor(props) {
    super(props);

    this.value = this.props.defaultValue
      ? this.props.defaultValue
      : app.emptyString;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.value = e.target.value;
    this.props.onChange(this.value);
  }

  render() {
    const options = this.props.values.map((d) => (
      <option key={d} value={d}>
        {d}
      </option>
    ));

    return (
      <select
        name={this.props.name}
        value={this.value}
        onChange={this.handleChange}
      >
        {options}
      </select>
    );
  }
}

export default TextSelect;
