import {LitElement, html} from 'lit';
import dispatchEventValue from '../helpers/customEvent.helpers.js';
import style from '../style.js';

class TextSelect extends LitElement {
  static styles = [style];

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

  handleChange(e) {
    e.preventDefault();

    dispatchEventValue(this, e.target.value);
  }

  render() {
    let selectClass = this._className;
    if (this.className) {
      selectClass += ` ${this.className}`;
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
        class=${selectClass}
      >
        ${options}
      </select>
    `;
  }
}

customElements.define('text-select', TextSelect);