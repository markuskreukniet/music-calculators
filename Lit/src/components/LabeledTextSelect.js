import {LitElement, html} from 'lit-element';
import getCustomEventOptions from '../helpers/customEvent.helpers.js';
import './TextSelect.js';

class LabeledTextSelect extends LitElement {
  static get properties() {
    return {
      className: {type: String},
      labelText: {type: String},
      values: {type: Array},
      value: {type: String},
    };
  }

  constructor() {
    super();
  }

  handleChange(e) {
    const options = getCustomEventOptions(e.detail);
    this.dispatchEvent(new CustomEvent('value', options));
  }

  render() {
    return html`
      <label .className=${this.className}>
        ${this.labelText}
        <text-select
          .values=${this.values}
          .value=${this.value}
          @value=${this.handleChange}
        /></text-select>
      </label>
    `;
  }
}

customElements.define('labeled-text-select', LabeledTextSelect);
