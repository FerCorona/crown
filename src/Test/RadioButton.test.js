import React from 'react';
import renderer from 'react-test-renderer';
import RadioButton from '../RadioButton/index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <RadioButton />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});