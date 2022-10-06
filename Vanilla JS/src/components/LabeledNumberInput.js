function LabeledNumberInput(parent, labelText, value, listener) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    const label = createElementAppendChildWithClassName(
      "label",
      that.parent,
      "display-block padding border-bottom"
    );
    label.innerHTML = labelText;

    const input = createElementAppendChild("input", label);
    input.type = "number";
    input.value = value;
    input.addEventListener("change", listener);

    that.element = label;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
