import React from "react";
import DurationResultChoice from "./DurationResultChoice.js";
import LabeledNumberInput from "./LabeledNumberInput.js";
import LabeledSelectDuration from "./LabeledSelectDuration.js";
import ReverbCalculator from "./ReverbCalculator.js";

class ReverbCalculatorApp extends React.Component {
  constructor(props) {
    super(props);

    this.tempo = "tempo";
    this.preDelay = "preDelay";
    this.secondValue = "decay";

    const emptyString = "";
    this.state = {
      [this.tempo]: emptyString,
      [this.preDelay]: emptyString,
      [this.secondValue]: emptyString,
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
    const secondValueLabelText = "Decay:";

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
          onChange={(e) => this.handleChange("durationResult", e)}
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
            labelText={secondValueLabelText}
            defaultValue={defaultValueSelect}
            name={this.secondValue}
            onChange={(e) => this.handleChange(this.secondValue, e)}
          />
        </div>
        <ReverbCalculator
          arithmeticOperation={this.state.durationResult}
          tempo={this.state[this.tempo]}
          preDelay={this.state[this.preDelay]}
          decay={this.state[this.secondValue]}
        />
      </div>
    );
  }
}

export default ReverbCalculatorApp;
