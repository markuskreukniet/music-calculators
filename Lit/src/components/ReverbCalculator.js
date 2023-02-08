import {LitElement, html} from 'lit';
import arithmeticOperation from '../constants/arithmeticOperation.constants.js';
import reverb from '../constants/reverb.constants.js';

export class ReverbCalculator extends LitElement {
  static get properties() {
    return {
      calculatorOperation: {type: String},
      tempo: {type: Number},
      valueOne: {type: String},
      valueTwo: {type: String},
      subtractionText: {type: String},

      _preDelay: {type: String},
      _decay: {type: String},
      _totalReverb: {type: String},
    };
  }

  constructor() {
    super();

    this._preDelay = this._addParentheses(reverb.preDelay);
    this._decay = this._addParentheses(reverb.decay);
    this._totalReverb = this._addParentheses(reverb.totalReverb);
  }

  _addParentheses(string) {
    return `(${string})`;
  }

  render() {
    if (this.props.calculatorOperation === arithmeticOperation.subtraction) {
      //
    }
    return html``;
  }
}

window.customElements.define('reverb-calculator', ReverbCalculator);
