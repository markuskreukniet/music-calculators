import React from "react";

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // e.preventDefault(); is not needed

    this.props.onChange(e.target.value);
  }

  render() {
    const labelledRadioInputs = this.props.textValueCombinations.map((x) => (
      <label className={"display-block"}>
        <input
          type="radio"
          name={this.props.name}
          value={x.value}
          onChange={this.handleChange}
          defaultChecked={x.value === this.props.defaultValue} // the attribute defaultChecked should be used and not the attribute checked
        />
        {x.text}
      </label>
    ));

    return <div>{labelledRadioInputs}</div>;
  }
}

export default RadioGroup;
