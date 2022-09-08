function ReverbCalculatorApp(parent) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    let div = document.createElement("div");

    that.parent.appendChild(div);
    that.element = div;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
