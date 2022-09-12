function LabeledRadioGroup(
  parent,
  textValueCombinations,
  value,
  labelText,
  listener
) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    const div = document.createElement("div");
    div.className = "display-block padding border-bottom";

    const p = document.createElement("p");
    p.innerHTML = labelText;
    p.className = "text-before-list";

    div.appendChild(p);

    new RadioGroup(div, textValueCombinations, value, listener);

    that.parent.appendChild(div);
    that.element = div;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
