import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
//import App from './App';
import Items from './items';

/* { id: 1, name: 'longsword', enhancement: 4 },
{ id: 2, name: 'gauntlet', enhancement: 9 },
{ id: 3, name: 'wizard\'s staff', enhancement: 14 }
 */

describe('the Item componment', () => {
test('renders the item component', () => {
    render(<Items />);
});

test('displays the title', () => {
const component = render(<Items />);
const title = component.getByTestId('title');
expect(title).toHaveTextContent(/Items/i);
const item = component.getByTestId('item');
//expect(score).toHaveTextContent('4');
expect(item).toHaveTextContent('bronze');
})

test('enhancement button increases score', () => {
    const component = render(<Items />);
    const button = component.getByTestId(/button/i);
    fireEvent.click(button);

    const score = component.getByTestId('enhancement')
    expect(score).toHaveTextContent('5');
})
});
