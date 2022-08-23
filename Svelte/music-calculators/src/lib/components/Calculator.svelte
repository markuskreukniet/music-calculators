<script>
  import app from "../constants/app.constants.js";
  import arithmeticOperation from "../constants/arithmeticOperation.constants.js";

  export let tempo;
  export let calculatorOperation;
  export let valueOne;
  export let valueTwo;
  export let valueOneText;
  export let valueTwoText;
  export let resultTextPart;

  $: resultText = determineResultText(
    tempo,
    calculatorOperation,
    valueOne,
    valueTwo,
    valueOneText,
    valueTwoText,
    resultTextPart
  );

  function determineNoteInMs(tempo) {
    const minInMs = 60000; // 1 minute = 60000 milliseconds
    const beatInMs = minInMs / tempo; // tempo is in BPM (beats per minute)
    return beatInMs * 4;
  }

  function valueToMs(value, note) {
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

  function determineResultText(
    tempo,
    calculatorOperation,
    valueOne,
    valueTwo,
    valueOneText,
    valueTwoText,
    resultTextPart
  ) {
    const noteInMs = determineNoteInMs(tempo);

    const valueOneInMs = valueToMsWithMaxTwoDecimals(valueOne, noteInMs);
    const valueTwoInMs = valueToMsWithMaxTwoDecimals(valueTwo, noteInMs);

    let resultValue = -1;
    let arithmeticOperationSign = app.emptyString;

    switch (calculatorOperation) {
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

    let result = `${toValueMsTextString(valueOneInMs, valueOneText)}
    ${arithmeticOperationSign}
    ${toValueMsTextString(valueTwoInMs, valueTwoText)}
    =
    ${toValueMsTextString(resultValue, resultTextPart)}`;

    if (resultValue <= 0) {
      result = `${result}. A result with a negative or 0 value is invalid.`;
    }

    return result;
  }
</script>

<p>Result:</p>
<p>{resultText}</p>
