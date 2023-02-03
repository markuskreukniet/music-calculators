import {LitElement, html} from 'lit-element';
import getCustomEventOptions from '../helpers/customEvent.helpers.js';

// TODO: import app from '../constants/app.constants.js';

class TextSelect extends LitElement {
  static get properties() {
    return {
      value: {type: String},
      values: {type: Array},
    };
  }

  constructor() {
    super();
  }

  handleChange(e) {
    // e.preventDefault(); TODO: is needed?
    const options = getCustomEventOptions(e.target.value);
    this.dispatchEvent(new CustomEvent('value', options));
  }

  render() {
    // TODO:
    const options = this.values.map(
      (x) => html`<option value=${x}>${x}</option>`
    );
    return html`
      <select .value=${this.value} @change=${this.handleChange}>
        ${options}
      </select>
    `;
  }
}

customElements.define('text-select', TextSelect);
