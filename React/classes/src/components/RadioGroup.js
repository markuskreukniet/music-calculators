import React from "react";

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);

    this.combinations = this.props.textValueCombinations;

    this.name = this.combinations[0]?.value;

    for (let i = 1; i < this.combinations.length; i++) {
      this.name += `, ${this.combinations[i].value}`;
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // e.preventDefault(); is not needed

    this.props.onChange(e.target.value);
  }

  render() {
    const labeledRadioInputs = this.combinations.map((x, i) => (
      <label className="display-block" key={i}>
        <input
          type="radio"
          name={this.name}
          value={x.value}
          onChange={this.handleChange}
          defaultChecked={x.value === this.props.value} // the attribute defaultChecked should be used and not the attribute checked
          className="input-radio"
        />
        {x.text}
      </label>
    ));

    return <div>{labeledRadioInputs}</div>;
  }
}

export default RadioGroup;
