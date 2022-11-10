import {LitElement, html} from 'lit';
import style from '../style.js';
import 'RadioGroup.js';

export class LabeledRadioGroup extends LitElement {
  static styles = [style];

  static get properties() {
    return {
      labelText: {type: String},
      textValueCombinations: {type: Array},
      value: {type: String},
    };
  }

  // TODO: same as in LabeledNumberInput?
  _handleChange(e) {
    const options = {
      detail: e.target.value,
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('value', options));
  }

  render() {
    return html`
      <div class="display-block padding border-bottom">
        <p class="text-before-list">${this.labelText}</p>
        <radio-group
          text-value-combinations=${this.textValueCombinations}
          value=${this.value}
          @value=${this._handleChange}
        ></radio-group>
      </div>
    `;
  }
}

window.customElements.define('labeled-radio-group', LabeledRadioGroup);
