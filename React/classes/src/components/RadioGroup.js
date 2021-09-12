import React from "react";

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  getName() {
    let name = this.props.textValueCombinations?.[0]?.value;

    for (let i = 1; i < this.props.textValueCombinations?.length; i++) {
      name += `, ${this.props.textValueCombinations[i].value}`;
    }

    return name;
  }

  handleChange(e) {
    // e.preventDefault(); is not needed

    this.props.onChange(e.target.value);
  }

  render() {
    const name = this.getName();
    const labeledRadioInputs = this.props.textValueCombinations.map((x, i) => (
      <label className="display-block" key={i}>
        <input
          type="radio"
          name={name}
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
