import React from "react";
import arithmeticOperation from "../constants/arithmeticOperation.constants.js";

class MusicCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.emptyString = "";
  }

  determineNoteInMs(tempo) {
    const minInMs = 60000; // 1 minute = 60000 milliseconds
    const beatInMs = minInMs / tempo; // tempo is in BPM (beats per minute)
    return beatInMs * 4;
  }

  valueToMs(value, note) {
    // value = value.replace(" notes", "").replace(" note", "").replace(" ms", ""); // not needed
    let noteValue = parseFloat(value);

    const fractionString = "1/";
    if (value.includes(fractionString)) {
      noteValue =
        note / parseInt(value.replace(fractionString, this.emptyString), 10);
    } else if (value.includes("note")) {
      noteValue = note * parseInt(value, 10);
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
    const labeledFormula = this.props.labeledFormula;

    const valueOneInMs = this.valueToMsWithMaxTwoDecimals(
      labeledFormula.operandLabelCombinations[0].operand,
      noteInMs
    );
    const valueTwoInMs = this.valueToMsWithMaxTwoDecimals(
      labeledFormula.operandLabelCombinations[1].operand,
      noteInMs
    );

    let resultValue = -1;
    let arithmeticOperationSign = this.emptyString;

    switch (labeledFormula.operator) {
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
      labeledFormula.operandLabelCombinations[0].label
    )}
    ${arithmeticOperationSign}
    ${this.toValueMsTextString(
      valueTwoInMs,
      labeledFormula.operandLabelCombinations[1].label
    )}
    =
    ${this.toValueMsTextString(resultValue, labeledFormula.label)}`;

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

export default MusicCalculator;
