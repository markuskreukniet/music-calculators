import React from "react";

import arithmeticOperation from "../constants/arithmeticOperation.constants.js";
import durations from "../constants/durations.constants.js";
import reverb from "../constants/reverb.constants.js";

import LabeledNumberInput from "./LabeledNumberInput.js";
import LabeledRadioGroup from "./LabeledRadioGroup.js";
import LabeledTextSelect from "./LabeledTextSelect.js";
import ReverbCalculator from "./ReverbCalculator.js";
import TextSelect from "./TextSelect.js";

class ReverbCalculatorApp extends React.Component {
  constructor(props) {
    super(props);

    this.preDelayColon = this.addColon(reverb.preDelay);
    this.decayColon = this.addColon(reverb.decay);
    this.totalReverbColon = this.addColon(reverb.totalReverb);

    this.values = [this.preDelayColon, this.decayColon];

    this.textValueCombinations = [
      {
        text: "The total reverb duration by choosing a duration for the pre-delay and decay",
        value: arithmeticOperation.addition,
      },
      {
        text: "The pre-delay or decay duration by choosing a duration for the total reverb, and pre-delay or decay",
        value: arithmeticOperation.subtraction,
      },
    ];

    this.tempo = "tempo";
    this.durationResult = "durationResult";
    this.valueOne = "valueOne";
    this.valueTwo = "valueTwo";
    this.subtractionTextColon = "subtractionTextColon";

    const defaultValueSelect = "1/64 note";

    this.state = {
      [this.tempo]: "128",
      [this.durationResult]: this.textValueCombinations[0].value,
      [this.valueOne]: defaultValueSelect,
      [this.valueTwo]: defaultValueSelect,
      [this.subtractionTextColon]: this.preDelayColon,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  addColon(string) {
    return `${string}:`;
  }

  // This function aims to skip an array. In React, the HTML elements in an array need a 'key' attribute.
  render() {
    const child1MarginOnlyLeft = "child-1-margin-only-left-1";
    const marginOnlyLeft = "margin-only-left-1";

    let elementOne = null;
    let elementTwo = null;
    let elementThree = null;
    let elementFour = null;

    let subtractionText = reverb.preDelay;

    if (this.state.durationResult === arithmeticOperation.addition) {
      elementOne = (
        <LabeledTextSelect
          labelText={this.preDelayColon}
          values={durations}
          value={this.state[this.valueOne]}
          className={child1MarginOnlyLeft}
          onChange={(e) => this.handleChange(this.valueOne, e)}
        />
      );
      elementTwo = <p className={marginOnlyLeft}>+</p>;
      elementThree = (
        <LabeledTextSelect
          labelText={this.decayColon}
          values={durations}
          value={this.state[this.valueTwo]}
          onChange={(e) => this.handleChange(this.valueTwo, e)}
          className={`${child1MarginOnlyLeft} ${marginOnlyLeft}`}
        />
      );
    } else {
      if (this.state[this.subtractionTextColon] === this.decayColon) {
        subtractionText = reverb.decay;
      }

      elementOne = (
        <LabeledTextSelect
          labelText={this.totalReverbColon}
          values={durations}
          value={this.state[this.valueOne]}
          className={child1MarginOnlyLeft}
          onChange={(e) => this.handleChange(this.valueOne, e)}
        />
      );
      elementTwo = <p className={marginOnlyLeft}>-</p>;

      elementThree = (
        <TextSelect
          values={this.values}
          value={this.state[this.subtractionTextColon]}
          onChange={(e) => this.handleChange(this.subtractionTextColon, e)}
          className={marginOnlyLeft}
        />
      );

      elementFour = (
        <TextSelect
          values={durations}
          value={this.state[this.valueTwo]}
          onChange={(e) => this.handleChange(this.valueTwo, e)}
          className={marginOnlyLeft}
        />
      );
    }

    return (
      <div>
        <LabeledNumberInput
          labelText={"Tempo in BPM:"}
          value={this.state[this.tempo]}
          onChange={(e) => this.handleChange(this.tempo, e)}
        />
        <LabeledRadioGroup
          labelText={"Calculate in ms:"}
          textValueCombinations={this.textValueCombinations}
          value={this.state[this.durationResult]}
          onChange={(e) => this.handleChange(this.durationResult, e)}
        />
        <div
          className={"display-flex align-items-center padding border-bottom"}
        >
          {elementOne}
          {elementTwo}
          {elementThree}
          {elementFour}
        </div>
        <ReverbCalculator
          calculatorOperation={this.state[this.durationResult]}
          tempo={this.state[this.tempo]}
          valueOne={this.state[this.valueOne]}
          valueTwo={this.state[this.valueTwo]}
          subtractionText={subtractionText}
        />
      </div>
    );
  }
}

export default ReverbCalculatorApp;
