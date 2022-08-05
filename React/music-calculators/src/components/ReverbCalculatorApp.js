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
    this.valueOne = "preDelay";
    this.valueTwo = "decay";

    this.className = "margin-right-1";

    const emptyString = "";
    this.state = {
      [this.tempo]: emptyString,
      [this.durationResult]: emptyString,
      [this.valueOne]: emptyString,
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

  elementP(arithmeticOperationSign) {
    return <p className={this.className}>{arithmeticOperationSign}</p>;
  }

  // This function aims to skip an array. In React, the HTML elements in an array need a 'key' attribute.
  render() {
    const defaultValueSelect = "1/64 note";

    let elementOne = null;
    let elementTwo = null;
    let elementThree = null;
    let elementFour = null;

    if (this.state.durationResult === arithmeticOperation.addition) {
      elementOne = this.elementLabeledTextSelect(
        "pre-delay:",
        durations,
        defaultValueSelect,
        this.valueOne,
        this.className
      );
      elementTwo = this.elementP("+");
      elementThree = this.elementLabeledTextSelect(
        "decay:",
        durations,
        defaultValueSelect,
        this.valueTwo,
        ""
      );
    } else {
      elementOne = this.elementLabeledTextSelect(
        "pre-delay:", // TODO: duplicate
        durations,
        defaultValueSelect,
        this.valueOne,
        this.className
      );
      elementTwo = this.elementP("-");
      elementThree = this.elementLabeledTextSelect(
        "total reverb:",
        durations,
        defaultValueSelect,
        this.valueTwo,
        ""
      );
    }

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
          {elementOne}
          {elementTwo}
          {elementThree}
          {elementFour}
        </div>
        <ReverbCalculator
          arithmeticOperation={this.state[this.durationResult]}
          tempo={this.state[this.tempo]}
          valueOne={this.state[this.valueOne]}
          valueTwo={this.state[this.valueTwo]}
        />
      </div>
    );
  }
}

export default ReverbCalculatorApp;
