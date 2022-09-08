function App(parent) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    console.log("App create");
  };
  this.init = async function () {
    that.create();
  };
  this.init();
}
