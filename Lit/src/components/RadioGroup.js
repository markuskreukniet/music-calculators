import {LitElement, html} from 'lit';
import {map} from 'lit/directives/map.js';
import getCustomEventOptions from '../helpers/customEvent.helpers.js';
import style from '../style.js';

export class RadioGroup extends LitElement {
  static styles = [style];

  static get properties() {
    return {
      textValueCombinations: {
        type: Array,
        hasChanged(textValueCombinations) {
          console.log('textValueCombinations', textValueCombinations);
          this._setName(); // TODO
        },
      },
      value: {type: String},
      _name: {type: String, state: true},
    };
  }

  constructor() {
    super();

    this._setNameToEmptyString();
  }

  _setNameToEmptyString() {
    this._name = '';
  }

  _setName() {
    this._setNameToEmptyString();

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

  _handleChange(e) {
    const options = getCustomEventOptions(e.target.value);
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
                .name=${this._name}
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
