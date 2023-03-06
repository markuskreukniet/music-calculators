import {LitElement, html} from 'lit';
import dispatchEventValue from '../helpers/customEvent.helpers.js';
import style from '../style.js';
import './TextSelect.js';

class LabeledTextSelect extends LitElement {
  static styles = [style];

  static get properties() {
    return {
      className: {type: String},
      labelText: {type: String},
      values: {type: Array},
      value: {type: String},
    };
  }

  handleChange(e) {
    dispatchEventValue(this, e.detail);
  }

  // TODO: label around text-select is probably invalid HTML. Same solution as Svelte project?
  render() {
    return html`
      <label class=${this.className}>
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
