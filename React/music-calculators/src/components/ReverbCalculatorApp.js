import React from "react";
import LabeledInputTempo from "./LabeledInputTempo.js";
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

      if (p.labelText.includes(s)) {
        p.name = p.labelText.replace(s, "");
      } else {
        p.name = p.labelText.replace(":", "");
      }
    }

    return properties;
  }

  render() {
    const childs = this.properties.map((p) => {
      switch (p.element) {
        case "input":
          return (
            <LabeledInputTempo
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
        {childs}
        <ReverbCalculator
          tempo={this.state["tempo in BPM"]}
          preDelay={this.state["pre-delay"]}
          decay={this.state.decay}
        />
      </div>
    );
  }
}

export default ReverbCalculatorApp;
