import React from "react";
import RadioGroup from "./RadioGroup.js";

class LabeledRadioGroup extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.onChange(value);
  }

  render() {
    return (
      <div className="display-block padding border-bottom">
        <p className="text-before-list">{this.props.labelText}</p>
        <RadioGroup
          textValueCombinations={this.props.textValueCombinations}
          value={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default LabeledRadioGroup;
