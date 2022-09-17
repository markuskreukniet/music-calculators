function ReverbCalculator(parent) {
  let that = this;
  this.parent = parent;

  this.create = function () {};
  this.render = function () {
    console.log("ReverbCalculator render");
  };
  this.init = function () {
    that.create();
  };

  this.init();

  return this;
}
