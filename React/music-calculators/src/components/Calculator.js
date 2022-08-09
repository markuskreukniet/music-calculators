import React from "react";

import app from "../constants/app.constants.js";
import arithmeticOperation from "../constants/arithmeticOperation.constants.js";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.minInMs = 60000; // 1 minute = 60000 milliseconds
  }

  determineNoteInMs(tempo) {
    const beatInMs = this.minInMs / tempo; // tempo is in BPM (beats per minute)
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

    value = value.replace(" note", app.emptyString);

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
      result = (value / 3) * 2;
    } else if (isDotted) {
      result *= 1.5;
    }

    return result;
  }

  hasAtLeastTwoDecimals(value) {
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
    if (this.hasAtLeastTwoDecimals(value)) {
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

  concatThreeStringsWithSpacesBetweenThem(string1, string2, string3) {
    return `${string1} ${string2} ${string3}`;
  }

  determineText(
    firstValue,
    firstValueText,
    secondValue,
    secondValueText,
    resultValue,
    resultValueText,
    arithmeticOperationSign
  ) {
    const ms = "ms";

    return `${this.concatThreeStringsWithSpacesBetweenThem(
      firstValue,
      ms,
      firstValueText
    )}
      ${arithmeticOperationSign}
      ${this.concatThreeStringsWithSpacesBetweenThem(
        secondValue,
        ms,
        secondValueText
      )}
      =
      ${this.concatThreeStringsWithSpacesBetweenThem(
        resultValue,
        ms,
        resultValueText
      )}`;
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

    switch (this.props.arithmeticOperation) {
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

    return this.determineText(
      valueOneInMs,
      this.props.valueOneText,
      valueTwoInMs,
      this.props.valueTwoText,
      resultValue,
      this.props.resultTextPart,
      arithmeticOperationSign
    );
  }

  render() {
    return (
      <div className={"display-flex padding"}>
        <p className={"margin-right-1"}>Result:</p>
        <p>{this.determineResultText()}</p>
      </div>
    );
  }
}

export default Calculator;
