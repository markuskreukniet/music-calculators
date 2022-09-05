function LabelledTextSelect(parent, values, value, listener) {
  let that = this;
  this.parent = parent;

  this.values = values;
  this.value = value;
  this.listener = listener;

  this.create = function () {
    let label = document.createElement("label");
    label.innerHTML = that.labelText;

    TextSelect(label, that.values, that.value, that.listener);

    that.parent.appendChild(label);
    that.element = label;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
