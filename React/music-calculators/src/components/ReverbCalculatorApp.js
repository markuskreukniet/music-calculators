import React from "react";

import app from "../constants/app.constants.js";
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

    this.preDelayColon = this.addColon(reverb.preDelay);
    this.decayColon = this.addColon(reverb.decay);
    this.totalReverbColon = this.addColon(reverb.totalReverb);

    this.tempo = "tempo";
    this.durationResult = "durationResult";
    this.valueOne = "valueOne";
    this.valueTwo = "valueTwo";
    this.valueThree = "valueThree";

    this.defaultValueTempo = "128";
    this.defaultDurationResult = "addition";
    this.defaultValueSelect = "1/64 note";

    // TODO: not all elements can get a default value in the render function
    this.state = {
      [this.tempo]: this.defaultValueTempo,
      [this.durationResult]: this.defaultDurationResult,
      [this.valueOne]: this.defaultValueSelect,
      [this.valueTwo]: this.defaultValueSelect,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, value) {
    // TODO: determine if it is possible to remove this check
    if (this.state[name] === value) {
      return;
    }

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
    const className = "margin-right-1";

    let subtractionText = app.emptyString;
    let calculatorValueTwo = this.state[this.valueTwo];

    let elementOne = null;
    let elementTwo = null;
    let elementThree = null;
    let elementFour = null;

    if (this.state.durationResult === arithmeticOperation.addition) {
      elementOne = this.elementLabeledTextSelect(
        this.preDelayColon,
        durations,
        this.defaultValueSelect,
        this.valueOne,
        className
      );
      elementTwo = this.elementP("+", className);
      elementThree = this.elementLabeledTextSelect(
        this.decayColon,
        durations,
        this.defaultValueSelect,
        this.valueTwo
      );
    } else {
      subtractionText =
        this.state[this.valueTwo] === this.preDelayColon
          ? reverb.preDelay
          : reverb.decay;
      calculatorValueTwo = this.state[this.valueThree];

      elementOne = this.elementLabeledTextSelect(
        this.totalReverbColon,
        durations,
        this.defaultValueSelect,
        this.valueOne,
        className
      );
      elementTwo = this.elementP("-");

      const values = [this.preDelayColon, this.decayColon];
      elementThree = this.elementTextSelect(
        values,
        this.preDelayColon,
        this.valueTwo
      );

      elementFour = this.elementTextSelect(
        durations,
        this.defaultValueSelect,
        this.valueThree
      );
    }

    return (
      <div>
        <LabeledNumberInput
          labelText={"Tempo in BPM:"}
          defaultValue={this.defaultValueTempo}
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
          subtractionText={subtractionText}
        />
      </div>
    );
  }
}

export default ReverbCalculatorApp;
