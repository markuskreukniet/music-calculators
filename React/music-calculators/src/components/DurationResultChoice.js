import React from "react";
import arithmeticOperation from "../constants/arithmeticOperation.constants.js";

class DurationResultChoice extends React.Component {
  constructor(props) {
    super(props);

    this.value = arithmeticOperation.addition;

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.onChange();
  }

  handleChange(e) {
    // e.preventDefault(); is not needed

    this.value = e.target.value;
    this.onChange();
  }

  onChange() {
    this.props.onChange(this.value);
  }

  render() {
    const radio = "radio";
    const name = "group";
    const displayBlock = "display-block";

    return (
      <div className={"display-block padding border-bottom"}>
        <p className={"text-before-list"}>Calculate in ms:</p>
        <label className={displayBlock}>
          <input
            type={radio}
            name={name}
            value={arithmeticOperation.addition}
            onChange={this.handleChange}
            defaultChecked // should be defaultChecked not checked
          />
          The total reverb duration by choosing a decay duration.
        </label>
        <label className={displayBlock}>
          <input
            type={radio}
            name={name}
            value={arithmeticOperation.subtraction}
            onChange={this.handleChange}
          />
          The decay duration by choosing a total reverb duration.
        </label>
      </div>
    );
  }
}

export default DurationResultChoice;
