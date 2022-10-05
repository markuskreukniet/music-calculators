function Calculator(parent) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    const div = createElementAppendChild("div", that.parent);
    that.element = div;
  };
  this.render = function () {
    console.log("Calculator render");
  };
  this.init = function () {
    that.create();
  };

  this.init();

  return this;
}
