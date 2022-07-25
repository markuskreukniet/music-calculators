import React from 'react';

class InputTempo extends React.Component {
  constructor(props) {
    super(props);

    this.value = '';
    if (this.props.defaultValue) {
      this.value = this.props.defaultValue;
    }

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
  };

  onChange() {
    this.props.onChange(this.value);
  }

  render() {
    return (
      <input name={this.props.name} value={this.value} onChange={this.handleChange} />
    );
  }
}

export default InputTempo;
