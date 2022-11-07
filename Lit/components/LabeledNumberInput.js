import {LitElement, html} from 'lit';
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
    const options = {
      detail: e.target.value,
      bubbles: true,
      composed: true,
    };
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
