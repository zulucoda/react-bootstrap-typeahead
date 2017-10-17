import TestUtils from 'react-dom/test-utils';

export function getInputNode(instance) {
  return TestUtils.findRenderedDOMComponentWithClass(
    instance,
    'bootstrap-typeahead-input-main'
  );
}

export function getMenuNode(instance) {
  const inputNode = getInputNode(instance);
  TestUtils.Simulate.focus(inputNode);

  return TestUtils.findRenderedDOMComponentWithClass(
    instance,
    'bootstrap-typeahead-menu'
  );
}

export function getMainNode(instance) {
  const inputNode = getInputNode(instance);
  TestUtils.Simulate.focus(inputNode);

  return TestUtils.findRenderedDOMComponentWithClass(
    instance,
    'bootstrap-typeahead'
  );
}

export function performSearch(query, instance, callback) {
  const inputNode = getInputNode(instance);
  TestUtils.Simulate.change(inputNode, {target: {value: query}});
  setTimeout(callback, instance.props.delay);
}

// Specifically to simulate `componentWillReceiveProps`. Does not actually
// update the instance's props.
export function updateProps(instance, newProps) {
  instance.componentWillReceiveProps({...instance.props, ...newProps});
}
