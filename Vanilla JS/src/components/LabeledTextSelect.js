function LabeledTextSelect(parent, values, value, labelText, listener) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    const label = createElementAppendChild("label", that.parent);
    label.innerHTML = labelText;

    new TextSelect(label, values, value, listener);

    that.element = label;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
