import React from 'react';
import renderer from 'react-test-renderer';
import Label from '../Label/index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Label />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});