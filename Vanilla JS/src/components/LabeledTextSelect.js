function LabeledTextSelect(parent, values, value, labelText, listener) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    let label = document.createElement("label");
    label.innerHTML = labelText;

    TextSelect(label, values, value, listener);

    that.parent.appendChild(label);
    that.element = label;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}