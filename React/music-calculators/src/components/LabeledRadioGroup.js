import React from "react";

// TODO: split into two components
class LabeledRadioGroup extends React.Component {
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

    // TODO: determine if p should be a label
    return (
      <div className={"display-block padding border-bottom"}>
        <p className={"text-before-list"}>{this.props.labelText}</p>
        <label className={displayBlock}>
          <input
            type={radio}
            name={this.props.name}
            value={this.props.textValueCombinations[0].value}
            onChange={this.handleChange}
            defaultChecked={
              this.props.textValueCombinations[0].value ===
              this.props.defaultValue
            } // should be defaultChecked not checked // TODO: correct? // TODO: duplicate comment
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
            } // should be defaultChecked not checked // TODO: correct? // TODO: duplicate comment
          />
          {this.props.textValueCombinations[1].text}
        </label>
      </div>
    );
  }
}

export default LabeledRadioGroup;
