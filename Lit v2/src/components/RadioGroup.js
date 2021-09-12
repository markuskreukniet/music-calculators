import {LitElement, html} from 'lit';
import {map} from 'lit/directives/map.js';
import dispatchEventValue from '../helpers/customEvent.helpers.js';
import style from '../style.js';

export class RadioGroup extends LitElement {
  static styles = [style];

  static get properties() {
    return {
      textValueCombinations: {type: Array},
      value: {type: String},
    };
  }

  _getName() {
    let name = this.textValueCombinations?.[0]?.value;

    for (let i = 1; i < this.textValueCombinations?.length; i++) {
      name += `, ${this.textValueCombinations[i].value}`;
    }

    return name;
  }

  _handleChange(e) {
    // e.preventDefault(); is not needed

    dispatchEventValue(this, e.target.value);
  }

  render() {
    const name = this._getName();

    return html`
      ${map(
        this.textValueCombinations,
        (combination) => html`
          <label class="display-block">
            <input
              type="radio"
              name=${name}
              value=${combination.value}
              @input=${this._handleChange}
              ?checked=${combination.value === this.value}
              class="input-radio"
            />
            ${combination.text}
          </label>
        `
      )}
    `;
  }
}

window.customElements.define('radio-group', RadioGroup);
