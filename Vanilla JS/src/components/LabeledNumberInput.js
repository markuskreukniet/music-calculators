function LabeledNumberInput(parent, labelText, value, listener) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    const label = document.createElement("label");
    label.innerHTML = labelText;
    label.className = "display-block padding border-bottom";

    const input = document.createElement("input");
    input.type = "number";
    input.value = value;
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
