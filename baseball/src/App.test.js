import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './components/display';
import Dashboard from './components/dashboard';
//import App from './App';
//import Items from './items';


describe('renders the app without crashing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})

describe('the Display componment', () => {
  test('renders the display component', () => {
      render(<Display />);
  });
  
  test('renders the dashboard component', () => {
    render(<Dashboard />);
  })
  
  /* test('displays the title', () => {
  const component = render(<Items />);
  const title = component.getByTestId('title');
  expect(title).toHaveTextContent(/Items/i);
  const item = component.getByTestId('item');
  //expect(score).toHaveTextContent('4');
  expect(item).toHaveTextContent('longsword');
  }) */
  
 /*  test('enhancement button increases score', () => {
      const component = render(<Items />);
      const button = component.getByText(/enhance/i);
      fireEvent.click(button);
  
      const score = component.getByTestId('enhancement')
      expect(score).toHaveTextContent('5');
  }) */
  });
