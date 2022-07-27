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
    const subtraction = "subtraction";

    return (
      <div>
        <label>
          {this.addition}
          <input
            type={radio}
            name={name}
            value={this.addition}
            onChange={this.handleChange}
            defaultChecked // should be defaultChecked not checked
          />
        </label>
        <label>
          {subtraction}
          <input
            type={radio}
            name={name}
            value={subtraction}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default DurationResultChoice;
