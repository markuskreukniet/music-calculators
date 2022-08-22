import React from "react";

class NumberInput extends React.Component {
  constructor(props) {
    super(props);

    this.value = this.props.value ? this.props.value : 0;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.value = e.target.value;
    this.props.onChange(this.value);
  }

  render() {
    return (
      <input type="number" value={this.value} onChange={this.handleChange} />
    );
  }
}

export default NumberInput;
