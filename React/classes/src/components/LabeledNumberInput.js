import React from "react";

class LabeledNumberInput extends React.Component {
  constructor(props) {
    super(props);

    this.value = this.props.value ? this.props.value : 0;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.value = e.target.value;
    this.props.onChange(this.value);
  }

  render() {
    return (
      <label className={"display-block padding border-bottom"}>
        {this.props.labelText}
        <input
          type="number"
          value={this.value}
          onChange={this.handleChange}
          className={"margin-only-left-1 input-number"}
        />
      </label>
    );
  }
}

export default LabeledNumberInput;
