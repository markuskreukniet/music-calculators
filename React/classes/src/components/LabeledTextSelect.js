import React from "react";
import TextSelect from "./TextSelect.js";

class LabeledTextSelect extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.onChange(value);
  }

  render() {
    return (
      <label className={this.props.className}>
        {this.props.labelText}
        <TextSelect
          values={this.props.values}
          value={this.props.value}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default LabeledTextSelect;
