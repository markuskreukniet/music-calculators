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
    const div = createElementAppendChild("div", that.parent);
    div.className = "display-block padding border-bottom";

    const p = createElementAppendChild("p", div);
    p.innerHTML = labelText;
    p.className = "text-before-list";

    new RadioGroup(div, textValueCombinations, value, listener);

    that.element = div;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
