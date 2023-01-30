import {LitElement, html} from 'lit';
import getCustomEventOptions from '../helpers/customEvent.helpers.js';
import style from '../style.js';

export class LabeledNumberInput extends LitElement {
  static get properties() {
    return {
      labelText: {type: String},
      value: {type: Number},
    };
  }

  constructor() {
    super();
  }

  static styles = [style];

  _handleChange(e) {
    const options = getCustomEventOptions(e.target.value); // TODO: same as RadioGroup. Add function to module
    this.dispatchEvent(new CustomEvent('value', options));
  }

  render() {
    return html`
      <label class="display-block padding border-bottom">
        ${this.labelText}
        <input
          type="number"
          @input=${this._handleChange}
          .value=${this.value}
          class="margin-only-left-1 input-number"
        />
      </label>
    `;
  }
}

window.customElements.define('labeled-number-input', LabeledNumberInput);
