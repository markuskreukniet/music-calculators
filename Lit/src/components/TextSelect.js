import {LitElement, html} from 'lit';
import getCustomEventOptions from '../helpers/customEvent.helpers.js';
import style from '../style.js';

class TextSelect extends LitElement {
  static get properties() {
    return {
      value: {type: String},
      values: {type: Array},
      className: {type: String},
    };
  }

  _className;

  constructor() {
    super();

    this._className = 'select';
  }

  static styles = [style];

  handleChange(e) {
    // e.preventDefault(); // TODO: is needed?
    const options = getCustomEventOptions(e.target.value);
    this.dispatchEvent(new CustomEvent('value', options));
  }

  render() {
    let selectClassName = this._className;
    if (this.className) {
      selectClassName += ` ${this.className}`;
    }

    // ?selected is needed in Lit
    const options = this.values.map(
      (x) =>
        html`<option value=${x} ?selected=${x === this.value}>${x}</option>`
    );
    return html`
      <select
        .value=${this.value}
        @change=${this.handleChange}
        class=${selectClassName}
      >
        ${options}
      </select>
    `;
  }
}

customElements.define('text-select', TextSelect);
