function RadioGroup(parent, textValueCombinations, value, listener) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    // determine name
    let name = "";
    const length = textValueCombinations.length;

    if (length > 0) {
      name = textValueCombinations[0].value;
    }

    if (length > 1) {
      for (let i = 1; i < length; i++) {
        name += `, ${textValueCombinations[i].value}`;
      }
    }

    // create element
    const div = createElementAppendChild("div", that.parent);

    for (const combination of textValueCombinations) {
      const label = createElementAppendChild("label", div);

      const input = createElementAppendChild("input", label);
      input.type = "radio";
      input.value = combination.value;
      input.name = name;
      input.addEventListener("change", listener);

      if (value === combination.value) {
        input.checked = true;
      }

      const text = document.createTextNode(combination.text);

      label.appendChild(text);
      label.className = "display-block";
    }

    that.element = div;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
