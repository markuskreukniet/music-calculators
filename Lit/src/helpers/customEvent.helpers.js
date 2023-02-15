function dispatchEventValue(element, detail) {
  const options = {
    detail: detail,
    bubbles: true, // The event bubbles up through the DOM tree, which parent elements can handle.
    composed: true, // The parent element can handle the event if the element is in a shadow tree.
  };

  element.dispatchEvent(new CustomEvent('value', options));
}

export default dispatchEventValue;
