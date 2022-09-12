function TextSelect(parent, values, value, listener) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    const select = createElementAppendChild("select", that.parent);

    for (const value of values) {
      const option = createElementAppendChild("option", select);
      option.value = value;
      option.innerHTML = value;
    }

    select.value = value;
    select.addEventListener("change", listener);
    select.className = "select";

    that.element = select;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
