import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../Card/index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Card />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});