function ReverbCalculatorApp(parent) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    // functions
    function addColon(string) {
      return `${string}:`;
    }

    that.handleChange = function (name, value) {
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
          if (value === that.preDelayColon) {
            that.subtractionText = reverb.preDelay;
          } else {
            that.subtractionText = reverb.decay;
          }

          break;
      }

      that.reverbCalculator.render(
        that.durationResult,
        that.tempo,
        that.valueOne,
        that.valueTwo,
        that.subtractionText
      );
    };

    // initializations
    that.preDelayColon = addColon(reverb.preDelay);
    that.decayColon = addColon(reverb.decay);
    that.totalReverbColon = addColon(reverb.totalReverb);

    that.values = [that.preDelayColon, that.decayColon];

    that.subtractionTextColon = that.preDelayColon;

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

    that.tempo = 128;
    that.durationResult = textValueCombinations[0].value;
    that.valueOne = defaultValueSelect;
    that.valueTwo = defaultValueSelect;

    // create
    const div = createElementAppendChild("div", that.parent);

    new LabeledNumberInput(div, "Tempo in BPM:", that.tempo, (e) =>
      that.handleChange("tempo", e.target.value)
    );
    new LabeledRadioGroup(
      div,
      textValueCombinations,
      that.durationResult,
      "Calculate in ms:",
      (e) => that.handleChange("durationResult", e.target.value)
    );

    that.divRow = createElementAppendChild("div", div);
    that.divRow.className = "display-block padding border-bottom";

    that.reverbCalculator = new ReverbCalculator(div);
    that.reverbCalculator.render(
      that.durationResult,
      that.tempo,
      that.valueOne,
      that.valueTwo,
      that.subtractionText
    );

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
        that.preDelayColon,
        (e) => that.handleChange("valueOne", e.target.value)
      ); // TODO: className

      p.innerHTML = "+";
      that.divRow.appendChild(p);

      new LabeledTextSelect(
        that.divRow,
        durations,
        that.valueTwo,
        that.decayColon,
        (e) => that.handleChange("valueTwo", e.target.value)
      ); // TODO: className
    } else {
      new LabeledTextSelect(
        that.divRow,
        durations,
        that.valueOne,
        that.totalReverbColon,
        (e) => that.handleChange("valueOne", e.target.value) // TODO: duplicate
      ); // TODO: className

      p.innerHTML = "-";
      that.divRow.appendChild(p);

      new TextSelect(that.divRow, that.values, that.subtractionTextColon, (e) =>
        that.handleChange("subtractionTextColon", e.target.value)
      ); // TODO: className

      new TextSelect(that.divRow, durations, that.valueTwo, (e) =>
        that.handleChange("valueTwo", e.target.value)
      ); // TODO: className
    }
  };
  this.init = function () {
    that.create();
    that.render();
  };

  this.init();
}
