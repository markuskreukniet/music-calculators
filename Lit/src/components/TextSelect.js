import {LitElement, html} from 'lit-element';
import getCustomEventOptions from '../helpers/customEvent.helpers.js';

class TextSelect extends LitElement {
  static get properties() {
    return {
      value: {type: String},
      values: {type: Array},
    };
  }

  handleChange(e) {
    // e.preventDefault(); // TODO: is needed?
    const options = getCustomEventOptions(e.target.value);
    this.dispatchEvent(new CustomEvent('value', options));
  }

  render() {
    // TODO:
    // ?selected is needed in Lit
    const options = this.values.map(
      (x) =>
        html`<option value=${x} ?selected=${x === this.value}>${x}</option>`
    );
    return html`
      <select .value=${this.value} @change=${this.handleChange}>
        ${options}
      </select>
    `;
  }
}

customElements.define('text-select', TextSelect);
