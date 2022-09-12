function ReverbCalculatorApp(parent) {
  let that = this;
  this.parent = parent;

  const textValueCombinations = [
    {
      text: "The total reverb duration by choosing a duration for the pre-delay and decay",
      value: arithmeticOperation.addition,
    },
    {
      text: "The pre-delay or decay duration by choosing a duration for the total reverb, and pre-delay or decay",
      value: arithmeticOperation.subtraction,
    },
  ];

  this.tempo = 128;
  this.durationResult = textValueCombinations[0].value;

  function tempoChange(e) {
    console.log("tempoChange", e.target.value);
  }

  function durationResultChange(e) {
    console.log("durationResultChange", e.target.value);
  }

  this.create = function () {
    const div = document.createElement("div");

    new LabeledNumberInput(div, "Tempo in BPM:", that.tempo, tempoChange);
    new LabeledRadioGroup(
      div,
      textValueCombinations,
      that.durationResult,
      "Calculate in ms:",
      durationResultChange
    );

    that.parent.appendChild(div);
    that.element = div;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
