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
    const div = createElementAppendChildWithClassName(
      "div",
      that.parent,
      "display-block padding border-bottom"
    );

    const p = createElementAppendChildWithClassName(
      "p",
      div,
      "text-before-list"
    );
    p.innerHTML = labelText;

    new RadioGroup(div, textValueCombinations, value, listener);

    that.element = div;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
