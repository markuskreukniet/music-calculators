import {LitElement, html} from 'lit';
import arithmeticOperation from '../constants/arithmeticOperation.constants.js';
import './LabeledNumberInput.js';
import './LabeledRadioGroup.js';

export class ReverbCalculatorApp extends LitElement {
  static get properties() {
    return {
      _durationResult: {type: String, state: true},
      _tempo: {type: Number, state: true},
    };
  }

  constructor() {
    super();

    const textValueCombinations = [
      {
        text: 'The total reverb duration by choosing a duration for the pre-delay and decay',
        value: arithmeticOperation.addition,
      },
      {
        text: 'The pre-delay or decay duration by choosing a duration for the total reverb, and pre-delay or decay',
        value: arithmeticOperation.subtraction,
      },
    ];

    this._durationResult = textValueCombinations[0].value;
    this._tempo = 128;
  }

  _handleChangeDurationResult(e) {
    this._durationResult = e.detail;
  }

  _handleChangeTempo(e) {
    this._tempo = e.detail;
  }

  render() {
    return html`
      <div>
        <labeled-number-input
          labelText=${'Tempo in BPM:'}
          value=${this._tempo}
          @value=${this._handleChangeTempo}
        ></labeled-number-input>
        <!-- <labeled-radio-group
          labelText=${'Calculate in ms:'}
          @value=${this._handleChangeDurationResult}
        ></labeled-radio-group> -->
      </div>
    `;
  }
}

window.customElements.define('reverb-calculator-app', ReverbCalculatorApp);
