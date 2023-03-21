import React from "react";

class LabeledNumberInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const valueNumber = Number(e.target.value); // string to number
    this.props.onChange(valueNumber);
  }

  render() {
    return (
      <label className="display-block padding border-bottom">
        {this.props.labelText}
        <input
          type="number"
          value={this.props.value}
          onChange={this.handleChange}
          className="margin-only-left-1 input-number"
        />
      </label>
    );
  }
}

export default LabeledNumberInput;
