import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

/* describe('renders the app without crashing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})

describe('the Button components', () => {
  test('the ball button increases ball number', () => {
    const component = render(<App />);
    const button = component.getByTestId('ballcounter');
    fireEvent.click(button);
    const balls = component.getByTestId('balls')
    expect(balls).toHaveTextContent('1');
  })

  test('the strike button increases strike number', () => {
    const component = render(<App />);
    const button = component.getByTestId('strikecounter');
    fireEvent.click(button);
    const strikes = component.getByTestId('strikes')
    expect(strikes).toHaveTextContent('1');
  })

  test('the strike number resets after 3 strikes', () => {
    const component = render(<App />);
    const button = component.getByTestId('strikecounter');
    fireEvent.click(button);
    fireEvent.click(button);
    const strikes = component.getByTestId('strikes')
    expect(strikes).toHaveTextContent('0');
  })

  test('the ball number resets after 4 balls', () => {
    const component = render(<App />);
    const button = component.getByTestId('ballcounter');
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    const balls = component.getByTestId('balls')
    expect(balls).toHaveTextContent('0');
  })

  test('the ball number resets after 3 strikes', () => {
    const component = render(<App />);
    const button = component.getByTestId('ballcounter');
    fireEvent.click(button);
    const button2 = component.getByTestId('strikecounter');
    fireEvent.click(button2);
    fireEvent.click(button2);
    fireEvent.click(button2);
    const balls = component.getByTestId('balls')
    expect(balls).toHaveTextContent('0');
  })

  test('the strike number resets after 4 balls', () => {
    const component = render(<App />);
    const button = component.getByTestId('strikecounter');
    fireEvent.click(button);
    const button2 = component.getByTestId('ballcounter');
    fireEvent.click(button2);
    fireEvent.click(button2);
    fireEvent.click(button2);
    fireEvent.click(button2);
    const strikes = component.getByTestId('strikes')
    expect(strikes).toHaveTextContent('0');
  })

  test('the foul button resets strikes when strike counter is at 2', () => {
    const component = render(<App />);
    const button = component.getByTestId('strikecounter');
    fireEvent.click(button);
    fireEvent.click(button);
    const button2 = component.getByTestId('foulcounter');
    fireEvent.click(button2);
    const strikes = component.getByTestId('strikes')
    expect(strikes).toHaveTextContent('0');
  })

  test('the foul button advances the foul counter', () => {
    const component = render(<App />);
    const button = component.getByTestId('foulcounter');
    fireEvent.click(button);
    const fouls = component.getByTestId('fouls')
    expect(fouls).toHaveTextContent('1');
  })

}); */
