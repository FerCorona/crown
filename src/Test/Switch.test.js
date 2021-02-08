import React from 'react';
import renderer from 'react-test-renderer';
import Switch from '../Switch/index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Switch id={1234} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});