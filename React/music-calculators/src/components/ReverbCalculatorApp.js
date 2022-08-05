import React from "react";
import arithmeticOperation from "../constants/arithmeticOperation.constants.js";
import durations from "../constants/durations.constants.js";
import DurationResultChoice from "./DurationResultChoice.js";
import LabeledNumberInput from "./LabeledNumberInput.js";
import LabeledTextSelect from "./LabeledTextSelect.js";
import ReverbCalculator from "./ReverbCalculator.js";

class ReverbCalculatorApp extends React.Component {
  constructor(props) {
    super(props);

    this.tempo = "tempo";
    this.durationResult = "durationResult";
    this.preDelay = "preDelay";
    this.valueTwo = "decay";

    const emptyString = "";
    this.state = {
      [this.tempo]: emptyString,
      [this.durationResult]: emptyString,
      [this.preDelay]: emptyString,
      [this.valueTwo]: emptyString,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  elementLabeledTextSelect(
    labelText,
    values,
    defaultValue,
    elementName,
    className
  ) {
    // TODO: className null and "" check. After this check works, the call to this function can remove the "" argument
    return (
      <LabeledTextSelect
        labelText={labelText}
        values={values}
        defaultValue={defaultValue}
        name={elementName}
        class={className}
        onChange={(e) => this.handleChange(elementName, e)}
      />
    );
  }

  render() {
    const valueTwoLabelText =
      this.state.durationResult === arithmeticOperation.addition
        ? "decay:"
        : "total reverb:"; // TODO: check if this.state.durationResult is true

    const defaultValueSelect = "1/64 note";
    const className = "margin-right-1";

    return (
      <div>
        <LabeledNumberInput
          labelText={"Tempo in BPM:"}
          defaultValue={"128"}
          name={this.tempo}
          onChange={(e) => this.handleChange(this.tempo, e)}
        />
        <DurationResultChoice
          onChange={(e) => this.handleChange(this.durationResult, e)}
        />
        <div className={"display-flex padding border-bottom"}>
          {this.elementLabeledTextSelect(
            "pre-delay:",
            durations,
            defaultValueSelect,
            this.preDelay,
            className
          )}
          <p className={className}>
            {this.state.durationResult === arithmeticOperation.addition
              ? "+"
              : "-"}
          </p>
          {this.elementLabeledTextSelect(
            valueTwoLabelText,
            durations,
            defaultValueSelect,
            this.valueTwo,
            ""
          )}
        </div>
        <ReverbCalculator
          arithmeticOperation={this.state[this.durationResult]}
          tempo={this.state[this.tempo]}
          preDelay={this.state[this.preDelay]}
          valueTwo={this.state[this.valueTwo]}
        />
      </div>
    );
  }
}

export default ReverbCalculatorApp;
