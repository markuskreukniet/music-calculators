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
    const radio = "radio";
    const displayBlock = "display-block";

    // the attribute defaultChecked should be used and not the attribute checked
    return (
      <div>
        <label className={displayBlock}>
          <input
            type={radio}
            name={this.props.name}
            value={this.props.textValueCombinations[0].value}
            onChange={this.handleChange}
            defaultChecked={
              this.props.textValueCombinations[0].value ===
              this.props.defaultValue
            }
          />
          {this.props.textValueCombinations[0].text}
        </label>
        <label className={displayBlock}>
          <input
            type={radio}
            name={this.props.name}
            value={this.props.textValueCombinations[1].value}
            onChange={this.handleChange}
            defaultChecked={
              this.props.textValueCombinations[1].value ===
              this.props.defaultValue
            }
          />
          {this.props.textValueCombinations[1].text}
        </label>
      </div>
    );
  }
}

export default RadioGroup;
