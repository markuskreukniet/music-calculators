function RadioGroup(parent, textValueCombinations, value, listener) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    // determine name
    let name = this.textValueCombinations?.[0]?.value;

    for (let i = 1; i < this.textValueCombinations?.length; i++) {
      name += `, ${this.textValueCombinations[i].value}`;
    }

    // create element
    const div = createElementAppendChild("div", that.parent);

    for (const combination of textValueCombinations) {
      const label = createElementAppendChildWithClassName(
        "label",
        div,
        "display-block"
      );

      const input = createElementAppendChildWithClassName(
        "input",
        label,
        "input-radio"
      );
      input.type = "radio";
      input.value = combination.value;
      input.name = name;
      input.addEventListener("change", listener);

      if (value === combination.value) {
        input.checked = true;
      }

      const text = document.createTextNode(combination.text);

      label.appendChild(text);
    }

    that.element = div;
  };

  this.init = function () {
    that.create();
  };

  this.init();
}
