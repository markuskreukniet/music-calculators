import {LitElement, html} from 'lit';
import './LabeledNumberInput.js';

export class ReverbCalculatorApp extends LitElement {
  constructor() {
    super();
  }

  _handleChange(e) {
    console.log('e.detail', e.detail);
  }

  render() {
    return html`
      <labeled-number-input
        value="128"
        @value=${this._handleChange}
      ></labeled-number-input>
    `;
  }
}

window.customElements.define('reverb-calculator-app', ReverbCalculatorApp);
