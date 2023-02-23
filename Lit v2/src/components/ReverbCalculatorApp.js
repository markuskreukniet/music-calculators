import {LitElement, html} from 'lit';
import arithmeticOperation from '../constants/arithmeticOperation.constants.js';
import durations from '../constants/durations.constants.js';
import reverb from '../constants/reverb.constants.js';
import style from '../style.js';
import './LabeledNumberInput.js';
import './LabeledRadioGroup.js';
import './LabeledTextSelect.js';
import './ReverbCalculator.js';
import './TextSelect.js';

export class ReverbCalculatorApp extends LitElement {
  static styles = [style];

  // Not every property should be part of properties: https://lit.dev/tutorials/word-viewer/#5
  static get properties() {
    return {
      _valueOne: {type: String, state: true},
      _valueTwo: {type: String, state: true},
      _durationResult: {type: String, state: true},
      _tempo: {type: Number, state: true},
      _subtractionTextColon: {type: String, state: true},
    };
  }

  _preDelayColon;
  _decayColon;
  _totalReverbColon;

  _values;
  _textValueCombinations;

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

    this._subtractionTextColon = this._preDelayColon;
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

  handleChangeSubtractionTextColon(e) {
    this._subtractionTextColon = e.detail;
  }

  _renderPartAddition(className, className2) {
    return html`
      <labeled-text-select
        labelText=${this._preDelayColon}
        .values=${durations}
        .value=${this._valueOne}
        @value=${this._handleChangeValueOne}
        className=${className}
      ></labeled-text-select>
      <p class=${className2}>+</p>
      <labeled-text-select
        labelText=${this._decayColon}
        .values=${durations}
        .value=${this._valueTwo}
        @value=${this._handleChangeValueTwo}
        className=${`${className} ${className2}`}
      ></labeled-text-select>
    `;
  }

  _renderPartSubtraction(className, className2) {
    return html`
      <labeled-text-select
        labelText=${this._totalReverbColon}
        .values=${durations}
        .value=${this._valueOne}
        @value=${this._handleChangeValueOne}
        className=${className}
      ></labeled-text-select>
      <p class=${className2}>-</p>
      <text-select
        .values=${this._values}
        .value=${this._subtractionTextColon}
        @value=${this.handleChangeSubtractionTextColon}
        className=${className2}
      ></text-select>
      <text-select
        .values=${durations}
        .value=${this._valueTwo}
        @value=${this._handleChangeValueTwo}
        className=${className2}
      ></text-select>
    `;
  }

  render() {
    const child1MarginOnlyLeft = 'child-1-margin-only-left-1';
    const marginOnlyLeft = 'margin-only-left-1';

    let subtractionText = reverb.preDelay;
    let htmlPart = null;

    if (this._durationResult === arithmeticOperation.addition) {
      htmlPart = this._renderPartAddition(child1MarginOnlyLeft, marginOnlyLeft);
    } else {
      if (this._subtractionTextColon === this._decayColon) {
        subtractionText = reverb.decay;
      }

      htmlPart = this._renderPartSubtraction(
        child1MarginOnlyLeft,
        marginOnlyLeft
      );
    }

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
        class="display-block padding border-bottom"
      ></labeled-radio-group>
      <div class="display-flex align-items-center padding border-bottom">
        ${htmlPart}
      </div>
      <reverb-calculator
        .calculatorOperation=${this._durationResult}
        .tempo=${this._tempo}
        .valueOne=${this._valueOne}
        .valueTwo=${this._valueTwo}
        subtractionText=${subtractionText}
      ></reverb-calculator>
    `;
  }
}

window.customElements.define('reverb-calculator-app', ReverbCalculatorApp);
