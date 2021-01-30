import React from 'react';
import Card from './Card';
import renderer from 'react-test-renderer';
import { unmountComponentAtNode } from 'react-dom';

describe('Card Snapshot Test', () => {
  it('should render as expected', () => {
    const tree = renderer.create(<Card />).toJSON();

    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});

let container = null;
describe('Card Component', () => {
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
});
