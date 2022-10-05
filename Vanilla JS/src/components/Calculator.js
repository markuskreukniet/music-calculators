function Calculator(parent) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    console.log("Calculator create");
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
