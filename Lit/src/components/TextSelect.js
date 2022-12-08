import {LitElement, html} from 'lit-element';

import app from '../constants/app.constants.js';

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
    // e.preventDefault(); TODO:
  }

  render() {
    // TODO: check and fix this commented code
    // let className = 'select';
    // if (this.className) {
    //   className += ` ${this.className}`;
    // }
    // const options = this.values.map(
    //   (x) => html`<option key=${x} value=${x}>${x}</option>`
    // );
    // return html`
    //   <select
    //     value=${this.value}
    //     @change=${this.handleChange}
    //     class=${className}
    //   >
    //     ${options}
    //   </select>
    // `;
  }
}

customElements.define('text-select', TextSelect);
