import {LitElement, html} from 'lit';
import arithmeticOperation from '../constants/arithmeticOperation.constants.js';
import style from '../style.js';

export class MusicCalculator extends LitElement {
  static styles = [style];

  static get properties() {
    return {
      tempo: {type: Number},
      labeledFormula: {type: Object},
    };
  }

  _emptyString = '';

  _determineNoteInMs(tempo) {
    const minInMs = 60000; // 1 minute = 60000 milliseconds
    const beatInMs = minInMs / tempo; // tempo is in BPM (beats per minute)
    return beatInMs * 4;
  }

  _valueToMs(value, note) {
    // value = value.replace(" notes", "").replace(" note", "").replace(" ms", ""); // not needed
    let noteValue = parseFloat(value);

    const fractionString = '1/';
    if (value.includes(fractionString)) {
      noteValue =
        note / parseInt(value.replace(fractionString, this._emptyString), 10);
    } else if (value.includes('note')) {
      noteValue = note * parseInt(value, 10);
    }

    if (value.includes(' triplet')) {
      noteValue = (noteValue / 3) * 2;
    } else if (value.includes(' dotted')) {
      noteValue *= 1.5;
    }

    return noteValue;
  }

  _hasMoreThanTwoDecimals(value) {
    const valueString = String(value);
    const dotString = '.';
    if (
      valueString.includes(dotString) &&
      valueString.split(dotString)[1].length > 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  _toMaxTwoDecimals(value) {
    if (this._hasMoreThanTwoDecimals(value)) {
      const stringResult = value.toFixed(2); // to string with two decimals
      return parseFloat(stringResult); // return float
    } else {
      return value;
    }
  }

  _valueToMsWithMaxTwoDecimals(value, noteInMs) {
    const ms = this._valueToMs(value, noteInMs);
    return this._toMaxTwoDecimals(ms);
  }

  _toValueMsTextString(value, text) {
    return `${value} ms ${text}`;
  }

  _determineResultText() {
    const noteInMs = this._determineNoteInMs(this.tempo);
    const labeledFormula = this.labeledFormula;

    const valueOneInMs = this._valueToMsWithMaxTwoDecimals(
      labeledFormula.operandLabelCombinations[0].operand,
      noteInMs
    );
    const valueTwoInMs = this._valueToMsWithMaxTwoDecimals(
      labeledFormula.operandLabelCombinations[1].operand,
      noteInMs
    );

    let resultValue = -1;
    let arithmeticOperationSign = this._emptyString;

    switch (labeledFormula.operator) {
      case arithmeticOperation.addition:
        resultValue = valueOneInMs + valueTwoInMs;
        arithmeticOperationSign = '+';

        break;
      case arithmeticOperation.subtraction:
        resultValue = valueOneInMs - valueTwoInMs;
        arithmeticOperationSign = '-';

        break;
      default:
        return null;
    }

    // toMaxTwoDecimals is needed for the floating-point problem. For example, the result can go wrong with 0.1 ms as a value.
    resultValue = this._toMaxTwoDecimals(resultValue);

    let result = `${this._toValueMsTextString(
      valueOneInMs,
      labeledFormula.operandLabelCombinations[0].label
    )}
    ${arithmeticOperationSign}
    ${this._toValueMsTextString(
      valueTwoInMs,
      labeledFormula.operandLabelCombinations[1].label
    )}
    =
    ${this._toValueMsTextString(resultValue, labeledFormula.label)}`;

    if (resultValue <= 0) {
      result = `${result}. A result with a negative or 0 value is invalid.`;
    }

    return result;
  }

  render() {
    return html`
      <p class="margin-0">Result:</p>
      <p class="margin-only-left-1">${this._determineResultText()}</p>
    `;
  }
}

window.customElements.define('music-calculator', MusicCalculator);
