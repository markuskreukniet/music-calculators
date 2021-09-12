import {LitElement, html} from 'lit';
import dispatchEventValue from '../helpers/customEvent.helpers.js';
import style from '../style.js';

export class LabeledNumberInput extends LitElement {
  static styles = [style];

  static get properties() {
    return {
      labelText: {type: String},
      value: {type: Number},
    };
  }

  _handleChange(e) {
    e.preventDefault();

    const valueNumber = Number(e.target.value); // string to number
    dispatchEventValue(this, valueNumber);
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
