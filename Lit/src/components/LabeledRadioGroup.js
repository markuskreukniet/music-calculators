import {LitElement, html} from 'lit';
import dispatchEventValue from '../helpers/customEvent.helpers.js';
import style from '../style.js';
import './RadioGroup.js';

export class LabeledRadioGroup extends LitElement {
  static styles = [style];

  static get properties() {
    return {
      labelText: {type: String},
      textValueCombinations: {type: Array},
      value: {type: String},
    };
  }

  constructor() {
    super();
  }

  _handleChange(e) {
    dispatchEventValue(this, e.detail);
  }

  render() {
    return html`
      <!-- TODO: should be style on host? -->
      <div class="display-block padding border-bottom">
        <p class="text-before-list">${this.labelText}</p>
        <radio-group
          .textValueCombinations=${this.textValueCombinations}
          .value=${this.value}
          @value=${this._handleChange}
        ></radio-group>
      </div>
    `;
  }
}

window.customElements.define('labeled-radio-group', LabeledRadioGroup);
