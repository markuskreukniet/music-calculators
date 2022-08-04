import React from "react";

class SelectDuration extends React.Component {
  constructor(props) {
    super(props);

    this.values = this.props.values;
    this.value = this.props.defaultValue ? this.props.defaultValue : "";

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.defaultValue) {
      this.onChange();
    }
  }

  handleChange(e) {
    e.preventDefault();

    this.value = e.target.value;
    this.onChange();
  }

  onChange() {
    this.props.onChange(this.value);
  }

  render() {
    const options = this.values.map((d) => (
      <option key={d} value={d}>
        {d}
      </option>
    ));

    return (
      <select
        name={this.props.name}
        value={this.value}
        onChange={this.handleChange}
      >
        {options}
      </select>
    );
  }
}

export default SelectDuration;
