function Calculator(parent) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    const div = createElementAppendChildWithClassName(
      "div",
      that.parent,
      "display-flex padding"
    );
    that.element = div;

    const p = createElementAppendChildWithClassName("p", div, "margin-0");
    p.innerHTML = "Result:";

    that.resultP = createElementAppendChildWithClassName(
      "p",
      div,
      "margin-only-left-1"
    );
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
