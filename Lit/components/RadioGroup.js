import {LitElement, html} from 'lit';
import {map} from 'lit/directives/map.js';
import style from '../style.js';

export class RadioGroup extends LitElement {
  static styles = [style];

  static get properties() {
    return {
      textValueCombinations: {type: Array},
      value: {type: String},
      _name: {type: String, state: true},
    };
  }

  constructor() {
    super();

    this._name = '';
    const length = this.textValueCombinations.length;

    if (length > 0) {
      this._name = this.textValueCombinations[0].value;
    }

    if (length > 1) {
      for (let i = 1; i < length; i++) {
        this._name += `, ${this.textValueCombinations[i].value}`;
      }
    }
  }

  // TODO: same as in LabeledNumberInput? depends also on preventdefault
  _handleChange(e) {
    const options = {
      detail: e.target.value,
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('value', options));
  }

  // TODO: does @input work?
  render() {
    return html`
      <div>
        ${map(
          this.textValueCombinations,
          (combination) => html`
            <label class="display-block">
              <input
                type="radio"
                name=${this.name}
                value=${combination.value}
                @input=${this._handleChange}
                ?checked=${combination.value === this.value}
                class="input-radio"
              />
            </label>
          `
        )}
      </div>
    `;
  }
}

window.customElements.define('radio-group', RadioGroup);
