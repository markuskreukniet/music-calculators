import React from "react";

import app from "../constants/app.constants.js";

class TextSelect extends React.Component {
  constructor(props) {
    super(props);

    this.value = this.props.value ? this.props.value : app.emptyString;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.value = e.target.value;
    this.props.onChange(this.value);
  }

  render() {
    const options = this.props.values.map((x) => (
      <option key={x} value={x}>
        {x}
      </option>
    ));

    return (
      <select
        value={this.value}
        onChange={this.handleChange}
        className="select"
      >
        {options}
      </select>
    );
  }
}

export default TextSelect;
