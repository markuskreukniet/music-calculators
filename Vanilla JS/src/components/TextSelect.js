function TextSelect(parent, values, value, listener) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    let select = document.createElement("select");

    for (let value of values) {
      let option = document.createElement("option");
      option.value = value;
      option.innerHTML = value;
      select.appendChild(option);
    }

    select.value = value;
    select.addEventListener("change", listener);
    select.className = "select";

    that.parent.appendChild(select);
    that.element = select;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
