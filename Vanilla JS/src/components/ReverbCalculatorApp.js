function ReverbCalculatorApp(parent) {
  let that = this;
  this.parent = parent;

  this.tempo = 128;

  function tempoChange(e) {
    console.log("tempoChange", e.target.value);
  }

  this.create = function () {
    let div = document.createElement("div");

    new LabeledNumberInput(div, "Tempo in BPM:", that.tempo, tempoChange);

    that.parent.appendChild(div);
    that.element = div;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
