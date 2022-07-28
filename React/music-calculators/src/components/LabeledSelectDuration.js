import React from "react";
import SelectDuration from "./SelectDuration.js";

class LabeledSelectDuration extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.onChange(value);
  }

  render() {
    return (
      <label className={this.props.class}>
        {this.props.labelText}
        <SelectDuration
          name={this.props.name}
          defaultValue={this.props.defaultValue}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default LabeledSelectDuration;
