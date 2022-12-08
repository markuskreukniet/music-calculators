import React from "react";

import app from "../constants/app.constants.js";
import arithmeticOperation from "../constants/arithmeticOperation.constants.js";

class Calculator extends React.Component {
  determineNoteInMs(tempo) {
    const minInMs = 60000; // 1 minute = 60000 milliseconds
    const beatInMs = minInMs / tempo; // tempo is in BPM (beats per minute)
    return beatInMs * 4;
  }

  valueToMs(value, note) {
    // value = value.replace(" note", "").replace(" notes", "").replace(" ms", ""); // not needed
    let noteValue = parseFloat(value);

    // Check if the value is in fractional form
    const fractionString = "1/";
    if (value.includes(fractionString)) {
      noteValue =
        note / parseInt(value.replace(fractionString, app.emptyString), 10);
    }

    if (value.includes(" triplet")) {
      noteValue = (noteValue / 3) * 2;
    } else if (value.includes(" dotted")) {
      noteValue *= 1.5;
    }

    return noteValue;
  }

  hasMoreThanTwoDecimals(value) {
    const valueString = String(value);
    const dotString = ".";
    if (
      valueString.includes(dotString) &&
      valueString.split(dotString)[1].length > 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  toMaxTwoDecimals(value) {
    if (this.hasMoreThanTwoDecimals(value)) {
      const stringResult = value.toFixed(2); // to string with two decimals
      return parseFloat(stringResult); // return float
    } else {
      return value;
    }
  }

  valueToMsWithMaxTwoDecimals(value, noteInMs) {
    const ms = this.valueToMs(value, noteInMs);
    return this.toMaxTwoDecimals(ms);
  }

  toValueMsTextString(value, text) {
    return `${value} ms ${text}`;
  }

  determineResultText() {
    const noteInMs = this.determineNoteInMs(this.props.tempo);

    const valueOneInMs = this.valueToMsWithMaxTwoDecimals(
      this.props.valueOne,
      noteInMs
    );
    const valueTwoInMs = this.valueToMsWithMaxTwoDecimals(
      this.props.valueTwo,
      noteInMs
    );

    let resultValue = -1;
    let arithmeticOperationSign = app.emptyString;

    switch (this.props.calculatorOperation) {
      case arithmeticOperation.addition:
        resultValue = valueOneInMs + valueTwoInMs;
        arithmeticOperationSign = "+";

        break;
      case arithmeticOperation.subtraction:
        resultValue = valueOneInMs - valueTwoInMs;
        arithmeticOperationSign = "-";

        break;
      default:
        return null;
    }

    // toMaxTwoDecimals is needed for the floating-point problem. For example, the result can go wrong with 0.1 ms as a value.
    resultValue = this.toMaxTwoDecimals(resultValue);

    let result = `${this.toValueMsTextString(
      valueOneInMs,
      this.props.valueOneText
    )}
    ${arithmeticOperationSign}
    ${this.toValueMsTextString(valueTwoInMs, this.props.valueTwoText)}
    =
    ${this.toValueMsTextString(resultValue, this.props.resultTextPart)}`;

    if (resultValue <= 0) {
      result = `${result}. A result with a negative or 0 value is invalid.`;
    }

    return result;
  }

  render() {
    return (
      <div className="display-flex padding">
        <p className="margin-0">Result:</p>
        <p className="margin-only-left-1">{this.determineResultText()}</p>
      </div>
    );
  }
}

export default Calculator;
