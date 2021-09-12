import {LitElement, html} from 'lit';
import arithmeticOperation from '../constants/arithmeticOperation.constants.js';
import reverb from '../constants/reverb.constants.js';
import style from '../style.js';
import './MusicCalculator.js';

export class ReverbCalculator extends LitElement {
  static styles = [style];

  static get properties() {
    return {
      calculatorOperation: {type: String},
      tempo: {type: Number},
      valueOne: {type: String},
      valueTwo: {type: String},
      subtractionText: {type: String},
    };
  }

  _preDelay;
  _decay;
  _totalReverb;

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
    const labeledFormula = {
      operator: this.calculatorOperation,
      operandLabelCombinations: [
        {operand: this.valueOne, label: this._preDelay},
        {operand: this.valueTwo, label: this._decay},
      ],
      label: this._totalReverb,
    };

    if (this.calculatorOperation === arithmeticOperation.subtraction) {
      labeledFormula.operandLabelCombinations[0].label = this._totalReverb;

      if (this.subtractionText === reverb.preDelay) {
        labeledFormula.operandLabelCombinations[1].label = this._preDelay;
        labeledFormula.label = this._decay;
      } else {
        labeledFormula.operandLabelCombinations[1].label = this._decay;
        labeledFormula.label = this._preDelay;
      }
    }

    return html`
      <music-calculator
        .tempo=${this.tempo}
        .labeledFormula=${labeledFormula}
        class="display-flex padding"
      ></music-calculator>
    `;
  }
}

window.customElements.define('reverb-calculator', ReverbCalculator);
