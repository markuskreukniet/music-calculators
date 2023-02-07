import {LitElement, html} from 'lit';
import arithmeticOperation from '../constants/arithmeticOperation.constants.js';
import durations from '../constants/durations.constants.js';
import reverb from '../constants/reverb.constants.js';
import './LabeledNumberInput.js';
import './LabeledRadioGroup.js';
import './LabeledTextSelect.js';
import './ReverbCalculator.js';

export class ReverbCalculatorApp extends LitElement {
  static get properties() {
    return {
      _preDelayColon: {type: String, state: true},
      _decayColon: {type: String, state: true},
      _totalReverbColon: {type: String, state: true},

      _values: {type: Array, state: true},
      _textValueCombinations: {type: Array, state: true},

      _valueOne: {type: String, state: true},
      _valueTwo: {type: String, state: true},
      _durationResult: {type: String, state: true},
      _tempo: {type: Number, state: true},
    };
  }

  constructor() {
    super();

    this._preDelayColon = this._addColon(reverb.preDelay);
    this._decayColon = this._addColon(reverb.decay);
    this._totalReverbColon = this._addColon(reverb.totalReverb);

    this._values = [this._preDelayColon, this._decayColon];

    this._textValueCombinations = [
      {
        text: 'The total reverb duration by choosing a duration for the pre-delay and decay',
        value: arithmeticOperation.addition,
      },
      {
        text: 'The pre-delay or decay duration by choosing a duration for the total reverb, and pre-delay or decay',
        value: arithmeticOperation.subtraction,
      },
    ];

    const defaultValueSelect = '1/64 note';

    this._valueOne = defaultValueSelect;
    this._valueTwo = defaultValueSelect;

    this._durationResult = this._textValueCombinations[0].value;
    this._tempo = 128;
  }

  _addColon(string) {
    return `${string}:`;
  }

  _handleChangeValueOne(e) {
    this._valueOne = e.detail;
  }

  _handleChangeValueTwo(e) {
    this._valueTwo = e.detail;
  }

  _handleChangeDurationResult(e) {
    this._durationResult = e.detail;
  }

  _handleChangeTempo(e) {
    this._tempo = e.detail;
  }

  // TODO: o.a. react ook zo render?
  _renderPart() {
    if (this._durationResult === arithmeticOperation.addition) {
      return html`
        <labeled-text-select
          .labelText=${this._preDelayColon}
          .values=${durations}
          .value=${this._valueOne}
          @value=${this._handleChangeValueOne}
        ></labeled-text-select>
        <p>+</p>
        <labeled-text-select
          .labelText=${this._decayColon}
          .values=${durations}
          .value=${this._valueTwo}
          @value=${this._handleChangeValueTwo}
        ></labeled-text-select>
      `;
    } else {
      return html`
        <labeled-text-select
          .labelText=${this._totalReverbColon}
          .values=${durations}
          .value=${this._valueOne}
          @value=${this._handleChangeValueOne}
        ></labeled-text-select>
        <p>-</p>
      `;
    }
  }

  render() {
    return html`
      <labeled-number-input
        labelText=${'Tempo in BPM:'}
        .value=${this._tempo}
        @value=${this._handleChangeTempo}
      ></labeled-number-input>
      <labeled-radio-group
        labelText=${'Calculate in ms:'}
        .textValueCombinations=${this._textValueCombinations}
        .value=${this._durationResult}
        @value=${this._handleChangeDurationResult}
      ></labeled-radio-group>

      <div class="display-flex align-items-center padding border-bottom">
        ${this._renderPart()}
      </div>

      <reverb-calculator
        .calculatorOperation=${this._durationResult}
        .tempo=${this._durationResult}
      ></reverb-calculator>
    `;
  }
}

window.customElements.define('reverb-calculator-app', ReverbCalculatorApp);