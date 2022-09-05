function LabeledNumberInput(parent, labelText, value, listener) {
  let that = this;
  this.parent = parent;

  this.labelText = labelText;
  this.value = value;

  this.create = function () {
    let label = document.createElement("label");
    label.innerHTML = that.labelText;
    label.className = "display-block padding border-bottom";

    let input = document.createElement("input");
    input.type = "number";
    input.value = that.value;
    input.addEventListener("change", listener);

    label.appendChild(input);
    that.parent.appendChild(label);

    that.element = label;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
