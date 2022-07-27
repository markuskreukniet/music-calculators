import React from "react";
import DurationResultChoice from "./DurationResultChoice.js";
import LabeledNumberInput from "./LabeledNumberInput.js";
import LabeledSelectDuration from "./LabeledSelectDuration.js";
import ReverbCalculator from "./ReverbCalculator.js";

class ReverbCalculatorApp extends React.Component {
  constructor(props) {
    super(props);

    this.properties = this.determineProperties();

    for (let p of this.properties) {
      this.state = {
        [p.name]: "",
      };
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  determineProperties() {
    let properties = [
      { labelText: "tempo in BPM:", element: "input", defaultValue: "128" },
      {
        labelText: "pre-delay duration:",
        element: "select",
        defaultValue: "1/64 note",
      },
      {
        labelText: "decay duration:",
        element: "select",
        defaultValue: "1/64 note",
      },
    ];

    for (let p of properties) {
      const s = " duration:";

      p.name = p.labelText.includes(s)
        ? p.labelText.replace(s, "")
        : p.labelText.replace(":", "");
    }

    return properties;
  }

  render() {
    const childs = this.properties.map((p) => {
      switch (p.element) {
        case "input":
          return (
            <LabeledNumberInput
              key={p.name}
              labelText={p.labelText}
              defaultValue={p.defaultValue}
              name={p.name}
              onChange={(e) => this.handleChange(p.name, e)}
            />
          );
        case "select":
          return (
            <LabeledSelectDuration
              key={p.name}
              labelText={p.labelText}
              defaultValue={p.defaultValue}
              name={p.name}
              onChange={(e) => this.handleChange(p.name, e)}
            />
          );
        default:
          return null;
      }
    });

    return (
      <div>
        <DurationResultChoice
          onChange={(e) => this.handleChange("durationResult", e)}
        />
        {childs}
        <ReverbCalculator
          arithmeticOperation={this.state.durationResult}
          tempo={this.state["tempo in BPM"]}
          preDelay={this.state["pre-delay"]}
          decay={this.state.decay}
        />
      </div>
    );
  }
}

export default ReverbCalculatorApp;
