function Calculator(parent) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    const div = createElementAppendChild("div", that.parent);
    div.className = "display-flex padding";
    that.element = div;

    const p = createElementAppendChild("p", div);
    p.className = "margin-0";
    p.innerHTML = "Result:";

    that.resultP = createElementAppendChild("p", div);
    that.resultP.className = "margin-only-left-1";
  };
  this.render = function (
    calculatorOperation,
    tempo,
    valueOne,
    valueTwo,
    subtractionText
  ) {
    console.log("Calculator render");

    that.resultP.innerHTML = "Calculator render";
  };
  this.init = function () {
    that.create();
  };

  this.init();

  return this;
}
