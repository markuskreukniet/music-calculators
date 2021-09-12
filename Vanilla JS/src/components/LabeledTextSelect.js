function LabeledTextSelect(
  parent,
  values,
  value,
  labelText,
  listener,
  className
) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    const label = createElementAppendChildWithClassName(
      "label",
      that.parent,
      className
    );
    label.innerHTML = labelText;

    new TextSelect(label, values, value, listener);

    that.element = label;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
