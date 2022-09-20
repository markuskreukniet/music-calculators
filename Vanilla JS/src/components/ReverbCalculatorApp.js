function ReverbCalculatorApp(parent) {
  let that = this;
  this.parent = parent;

  const preDelayColon = addColon(reverb.preDelay);
  const decayColon = addColon(reverb.decay);
  const totalReverbColon = addColon(reverb.totalReverb);

  const values = [preDelayColon, decayColon];

  // TODO: move to create
  this.subtractionTextColon = preDelayColon;

  function addColon(string) {
    return `${string}:`;
  }

  function handleChange(name, value) {
    switch (name) {
      case "tempo":
        that.tempo = value;

        break;
      case "durationResult":
        that.durationResult = value;
        that.render();

        break;
      case "valueOne":
        that.valueOne = value;

        break;
      case "valueTwo":
        that.valueTwo = value;

        break;

      case "subtractionTextColon":
        that.subtractionTextColon = value;

        break;
    }

    that.reverbCalculator.render();
  }

  this.create = function () {
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

    const defaultValueSelect = "1/64 note";

    this.tempo = 128;
    this.durationResult = textValueCombinations[0].value;
    this.valueOne = defaultValueSelect;
    this.valueTwo = defaultValueSelect;

    // create
    const div = createElementAppendChild("div", that.parent);

    new LabeledNumberInput(div, "Tempo in BPM:", that.tempo, (e) =>
      handleChange("tempo", e.target.value)
    );
    new LabeledRadioGroup(
      div,
      textValueCombinations,
      that.durationResult,
      "Calculate in ms:",
      (e) => handleChange("durationResult", e.target.value)
    );

    that.divRow = createElementAppendChild("div", div);
    that.divRow.className = "display-block padding border-bottom";

    that.reverbCalculator = new ReverbCalculator(div);
    that.reverbCalculator.render();

    that.element = div;
  };
  this.render = function () {
    that.divRow.innerHTML = "";

    const marginOnlyLeft = "margin-only-left-1";

    const p = document.createElement("p");
    p.className = marginOnlyLeft;

    if (that.durationResult === arithmeticOperation.addition) {
      new LabeledTextSelect(
        that.divRow,
        durations,
        that.valueOne,
        preDelayColon,
        (e) => handleChange("valueOne", e.target.value)
      ); // TODO: className

      p.innerHTML = "+";
      that.divRow.appendChild(p);

      new LabeledTextSelect(
        that.divRow,
        durations,
        that.valueTwo,
        decayColon,
        (e) => handleChange("valueTwo", e.target.value)
      ); // TODO: className
    } else {
      new LabeledTextSelect(
        that.divRow,
        durations,
        that.valueOne,
        totalReverbColon,
        (e) => handleChange("valueOne", e.target.value) // TODO: duplicate
      ); // TODO: className

      p.innerHTML = "-";
      that.divRow.appendChild(p);

      new TextSelect(that.divRow, values, that.subtractionTextColon, (e) =>
        handleChange("subtractionTextColon", e.target.value)
      ); // TODO: className

      new TextSelect(that.divRow, durations, that.valueTwo, valueTwoChange); // TODO: className
    }
  };
  this.init = function () {
    that.create();
    that.render();
  };

  this.init();
}
