import {LitElement, html, nothing} from 'lit';
import dispatchEventValue from '../helpers/customEvent.helpers.js';
import style from '../style.js';
import './TextSelect.js';

class OptionalLabeledTextSelect extends LitElement {
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
    e.preventDefault();

    dispatchEventValue(this, e.target.value);
  }

  // TODO: label around text-select is probably invalid HTML. Same solution as Svelte project?
  render() {
    const name = this.values.toString();
    let labelPart = nothing;

    if (this.labelText) {
      labelPart = html`<label for=${name}>${this.labelText}</label>`;
    }

    // ?selected is needed in Lit
    const options = this.values.map(
      (x) =>
        html`<option value=${x} ?selected=${x === this.value}>${x}</option>`
    );
    return html`
      <div class=${this.className}>
        ${labelPart}
        <select
          id=${name}
          .value=${this.value}
          @change=${this.handleChange}
          class="select"
        >
          ${options}
        </select>
      </div>
    `;
  }
}

customElements.define(
  'optional-labeled-text-select',
  OptionalLabeledTextSelect
);
