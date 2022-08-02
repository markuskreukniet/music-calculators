import React from "react";
import arithmeticOperation from "../constants/arithmeticOperation.constants.js";
import DurationResultChoice from "./DurationResultChoice.js";
import LabeledNumberInput from "./LabeledNumberInput.js";
import LabeledSelectDuration from "./LabeledSelectDuration.js";
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

  render() {
    const tempoLabelText = "Tempo in BPM:";
    const preDelayLabelText = "Pre-delay:";
    const valueTwoLabelText =
      this.state.durationResult === arithmeticOperation.addition
        ? "Decay"
        : "Total reverb:"; // TODO: check if this.state.durationResult is true

    const defaultValueTempo = "128";
    const defaultValueSelect = "1/64 note";

    return (
      <div>
        <LabeledNumberInput
          labelText={tempoLabelText}
          defaultValue={defaultValueTempo}
          name={this.tempo}
          onChange={(e) => this.handleChange(this.tempo, e)}
        />
        <DurationResultChoice
          onChange={(e) => this.handleChange(this.durationResult, e)}
        />
        <div className={"display-block padding border-bottom"}>
          <LabeledSelectDuration
            labelText={preDelayLabelText}
            defaultValue={defaultValueSelect}
            name={this.preDelay}
            class={"margin-right-2"}
            onChange={(e) => this.handleChange(this.preDelay, e)}
          />
          <LabeledSelectDuration
            labelText={valueTwoLabelText}
            defaultValue={defaultValueSelect}
            name={this.valueTwo}
            onChange={(e) => this.handleChange(this.valueTwo, e)}
          />
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
