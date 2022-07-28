import React from "react";

class DurationResultChoice extends React.Component {
  constructor(props) {
    super(props);

    this.addition = "addition";
    this.value = this.addition;

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

    return (
      <div>
        <p>Calculate in ms:</p>
        <label>
          <input
            type={radio}
            name={name}
            value={this.addition}
            onChange={this.handleChange}
            defaultChecked // should be defaultChecked not checked
          />
          The total reverb duration by choosing a decay duration.
        </label>
        <label>
          <input
            type={radio}
            name={name}
            value="subtraction"
            onChange={this.handleChange}
          />
          The decay duration by choosing a total reverb duration.
        </label>
      </div>
    );
  }
}

export default DurationResultChoice;
