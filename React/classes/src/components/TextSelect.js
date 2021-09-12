import React from "react";

class TextSelect extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.props.onChange(e.target.value);
  }

  render() {
    let selectClassName = "select";
    if (this.props.className) {
      selectClassName += ` ${this.props.className}`;
    }

    const options = this.props.values.map((x) => (
      <option key={x} value={x}>
        {x}
      </option>
    ));

    return (
      <select
        value={this.props.value}
        onChange={this.handleChange}
        className={selectClassName}
      >
        {options}
      </select>
    );
  }
}

export default TextSelect;
