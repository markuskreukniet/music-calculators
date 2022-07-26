import React from "react";

class SelectDuration extends React.Component {
  constructor(props) {
    super(props);

    this.durations = this.determineDurations();

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

  determineDurations() {
    return [
      "0 ms",
      "0.1 ms",
      "1 ms",
      "10 ms",
      "30 ms",

      "1/512 note triplet",
      "1/512 note",
      "1/512 note dotted",

      "1/256 note triplet",
      "1/256 note",
      "1/256 note dotted",

      "1/128 note triplet",
      "1/128 note",
      "1/128 note dotted",

      "1/64 note triplet",
      "1/64 note",
      "1/64 note dotted",

      "1/32 note triplet",
      "1/32 note",
      "1/32 note dotted",
    ];
  }

  render() {
    const childs = this.durations.map((d) => (
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
        {childs}
      </select>
    );
  }
}

export default SelectDuration;
