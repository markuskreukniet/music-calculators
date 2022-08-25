// TODO: name everything with prefix mca- (Music Calculators App)
// TODO: explain why using prefix
// TODO: use the style logic in the React project
const style = `
    :root {
        /* golden ratio */
        --g-ratio-p: 1.618;
        --g-ratio-n: 0.618;

        --size-1: 1rem;
        --size-1-s: calc(var(--size-1) * var(--g-ratio-n));

        --gray: #D3D3D3; /* color: LightGray */

        --border: solid 1px var(--gray);
    }

    #body {
        line-height: var(--g-ratio-p);
    }

    .input-radio {
        margin: 0 var(--size-1) 0 0;
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

    .first-child-margin-only-right-1 :first-child {
        margin: 0 var(--size-1) 0 0;
    }

    .margin-0 {
        margin: 0;
    }

    .margin-only-right-1 {
        margin: 0 var(--size-1) 0 0;
    }

    .padding {
        padding: var(--size-1);
    }

    .text-before-list {
        margin: 0 0 var(--size-1) 0;
    }
`;

export default style;
