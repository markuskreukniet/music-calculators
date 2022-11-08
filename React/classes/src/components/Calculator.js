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
    // if ms value, return its number
    let msString = " ms"; // has whitespace
    if (value.includes(msString)) {
      msString = value.replace(msString, app.emptyString);
      return parseFloat(msString); // return float
    }

    // determine ms value
    let result = -1;

    const tripletString = " triplet";
    const dottedString = " dotted";
    const fractionString = "1/";

    let isTriplet = false;
    let isDotted = false;
    let isFraction = false;

    const notes = " notes";
    if (value.includes(notes)) {
      value = value.replace(notes, app.emptyString);
    } else {
      value = value.replace(" note", app.emptyString);
    }

    if (value.includes(tripletString)) {
      isTriplet = true;
      value = value.replace(tripletString, app.emptyString);
    } else if (value.includes(dottedString)) {
      isDotted = true;
      value = value.replace(dottedString, app.emptyString);
    }

    if (value.includes(fractionString)) {
      isFraction = true;
      value = value.replace(fractionString, app.emptyString);
    }

    result = isFraction ? note / value : note * value;

    if (isTriplet) {
      result = (result / 3) * 2;
    } else if (isDotted) {
      result *= 1.5;
    }

    return result;
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
