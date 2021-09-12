// TODO: name everything with prefix mca- (Music Calculators App)
// TODO: explain why using prefix
import {css} from 'lit';

const style = css`
  /* should be :host instead of :root */
  :host {
    /* golden ratio */
    --g-ratio-p: 1.618;
    --g-ratio-n: 0.618;

    --size-1: 1rem;
    --size-1-s: calc(var(--size-1) * var(--g-ratio-n));

    --gray: #d3d3d3; /* color: LightGray */

    --border: solid 1px var(--gray);
  }

  /* faking HTML tag and CSS selectors */
  #body {
    line-height: var(--g-ratio-p);
  }

  .input-radio {
    margin: 0 var(--size-1) 0 0;
  }

  .input-number,
  .select {
    height: 2rem;
    padding: 0 var(--size-1-s);
    border: var(--border);
  }

  .input-number:focus-visible,
  .select:focus-visible {
    outline: solid 2px var(--gray);
  }

  /* classes */
  .align-items-center {
    align-items: center;
  }

  .border-bottom {
    border-bottom: var(--border);
  }

  .display-block {
    display: block;
  }

  .display-flex {
    display: flex;
  }

  .child-2-margin-only-left-1 :nth-child(2),
  .margin-only-left-1 {
    margin: 0 0 0 var(--size-1);
  }

  .margin-0 {
    margin: 0;
  }

  .padding {
    padding: var(--size-1);
  }

  .text-before-list {
    margin: 0 0 var(--size-1) 0;
  }
`;

export default style;
