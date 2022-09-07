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
    let div = document.createElement("div");
    div.className = "display-block padding border-bottom";

    let p = document.createElement("p");
    p.innerHTML = labelText;
    p.className = "text-before-list";

    div.appendChild(p);

    RadioGroup(div, textValueCombinations, value, listener);

    that.parent.appendChild(div);
    that.element = div;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
