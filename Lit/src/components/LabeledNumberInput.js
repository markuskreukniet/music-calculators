import {LitElement, html} from 'lit';
import customEventOptionsPart from '../constants/customEvent.constants.js';
import style from '../style.js';

export class LabeledNumberInput extends LitElement {
  constructor() {
    super();
  }

  static styles = [style];

  static get properties() {
    return {
      labelText: {type: String},
      value: {type: Number},
    };
  }

  _handleChange(e) {
    const options = customEventOptionsPart; // TODO: same as RadioGroup
    options.detail = e.target.value;

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
