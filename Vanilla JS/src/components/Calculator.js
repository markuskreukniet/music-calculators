function Calculator(parent) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    const div = createElementAppendChildWithClassName(
      "div",
      that.parent,
      "display-flex padding"
    );
    that.element = div;

    const p = createElementAppendChildWithClassName("p", div, "margin-0");
    p.innerHTML = "Result:";

    that.resultP = createElementAppendChildWithClassName(
      "p",
      div,
      "margin-only-left-1"
    );
  };
  this.render = function (tempo, labeledFormula) {
    // functions
    function determineNoteInMs(tempo) {
      const minInMs = 60000; // 1 minute = 60000 milliseconds
      const beatInMs = minInMs / tempo; // tempo is in BPM (beats per minute)
      return beatInMs * 4;
    }

    function valueToMs(value, note) {
      // value = value.replace(" notes", "").replace(" note", "").replace(" ms", ""); // not needed
      let noteValue = parseFloat(value);

      const fractionString = "1/";
      if (value.includes(fractionString)) {
        noteValue =
          note / parseInt(value.replace(fractionString, app.emptyString), 10);
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

    function hasMoreThanTwoDecimals(value) {
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

    function toMaxTwoDecimals(value) {
      if (hasMoreThanTwoDecimals(value)) {
        const stringResult = value.toFixed(2); // to string with two decimals
        return parseFloat(stringResult); // return float
      } else {
        return value;
      }
    }

    function valueToMsWithMaxTwoDecimals(value, noteInMs) {
      const ms = valueToMs(value, noteInMs);
      return toMaxTwoDecimals(ms);
    }

    function toValueMsTextString(value, text) {
      return `${value} ms ${text}`;
    }

    function determineResultText(tempo, labeledFormula) {
      const noteInMs = determineNoteInMs(tempo);

      const valueOneInMs = valueToMsWithMaxTwoDecimals(
        labeledFormula.operandLabelCombinations[0].operand,
        noteInMs
      );
      const valueTwoInMs = valueToMsWithMaxTwoDecimals(
        labeledFormula.operandLabelCombinations[1].operand,
        noteInMs
      );

      let resultValue = -1;
      let arithmeticOperationSign = app.emptyString;

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
      resultValue = toMaxTwoDecimals(resultValue);

      let result = `${toValueMsTextString(
        valueOneInMs,
        labeledFormula.operandLabelCombinations[0].label
      )}
      ${arithmeticOperationSign}
      ${toValueMsTextString(
        valueTwoInMs,
        labeledFormula.operandLabelCombinations[1].label
      )}
      =
      ${toValueMsTextString(resultValue, labeledFormula.label)}`;

      if (resultValue <= 0) {
        result = `${result}. A result with a negative or 0 value is invalid.`;
      }

      return result;
    }

    // render
    that.resultP.innerHTML = determineResultText(tempo, labeledFormula);
  };
  this.init = function () {
    that.create();
  };

  this.init();

  return this;
}
