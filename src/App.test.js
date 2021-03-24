import React from 'react';
import Enzyme, {shallow, mount, ShallowWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new Adapter()});
/**
 * Factory function to create a ShallowWrapper for the App Component
 * @function setup
 * @param {object} props 
 * @param {any} state -Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  return shallow(<App {...props}/>);
}
/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper 
 * @param {stirng} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val)=>{
  return wrapper.find(`[data-test="${val}"]`);
}
test('renders without crashing', () => {
  //Shallow
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper,'component-app')
  expect(appComponent.length).toBe(1);
});
test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper,'increment-button')
  expect(button.length).toBe(1);
});
test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper,'counter-display')
  expect(counterDisplay.length).toBe(1);
});
test('counter starts at 0', () => {

});
test('clicking button increments counter display', () => {

});


