function TextSelect(parent, values, value, listener, className) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    let selectClassName = "select";
    if (className) {
      selectClassName += ` ${className}`;
    }

    const select = createElementAppendChildWithClassName(
      "select",
      that.parent,
      selectClassName
    );

    for (const value of values) {
      const option = createElementAppendChild("option", select);
      option.value = value;
      option.innerHTML = value;
    }

    select.value = value;
    select.addEventListener("change", listener);

    that.element = select;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
