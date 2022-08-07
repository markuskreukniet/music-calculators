import React from "react";

import arithmeticOperation from "../constants/arithmeticOperation.constants.js";
import durations from "../constants/durations.constants.js";
import reverb from "../constants/reverb.constants.js";

import DurationResultChoice from "./DurationResultChoice.js";
import LabeledNumberInput from "./LabeledNumberInput.js";
import LabeledTextSelect from "./LabeledTextSelect.js";
import ReverbCalculator from "./ReverbCalculator.js";
import TextSelect from "./TextSelect.js";

class ReverbCalculatorApp extends React.Component {
  constructor(props) {
    super(props);

    this.preDelay = this.addColon(reverb.preDelay);
    this.decay = this.addColon(reverb.decay);
    this.totalReverb = this.addColon(reverb.totalReverb);

    this.tempo = "tempo";
    this.durationResult = "durationResult";
    this.valueOne = "valueOne";
    this.valueTwo = "valueTwo";
    this.valueThree = "valueThree";

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

  elementP(arithmeticOperationSign, className) {
    return <p className={className}>{arithmeticOperationSign}</p>;
  }

  elementTextSelect(values, defaultValue, elementName) {
    return (
      <TextSelect
        values={values}
        defaultValue={defaultValue}
        name={elementName}
        onChange={(e) => this.handleChange(elementName, e)}
      />
    );
  }

  addColon(string) {
    return `${string}:`;
  }

  // This function aims to skip an array. In React, the HTML elements in an array need a 'key' attribute.
  render() {
    const defaultValueSelect = "1/64 note";
    const className = "margin-right-1";

    let calculatorValueTwo = this.state[this.valueTwo];

    let elementOne = null;
    let elementTwo = null;
    let elementThree = null;
    let elementFour = null;

    if (this.state.durationResult === arithmeticOperation.addition) {
      elementOne = this.elementLabeledTextSelect(
        this.preDelay,
        durations,
        defaultValueSelect,
        this.valueOne,
        className
      );
      elementTwo = this.elementP("+", className);
      elementThree = this.elementLabeledTextSelect(
        this.decay,
        durations,
        defaultValueSelect,
        this.valueTwo,
        ""
      );
    } else {
      calculatorValueTwo = this.state[this.valueThree];

      elementOne = this.elementLabeledTextSelect(
        this.totalReverb,
        durations,
        defaultValueSelect,
        this.valueOne,
        className
      );
      elementTwo = this.elementP("-");

      const values = [this.preDelay, this.decay];
      elementThree = this.elementTextSelect(
        values,
        this.preDelay,
        this.valueTwo
      );

      elementFour = this.elementTextSelect(
        durations,
        defaultValueSelect,
        this.valueThree
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
          valueTwo={calculatorValueTwo}
        />
      </div>
    );
  }
}

export default ReverbCalculatorApp;
