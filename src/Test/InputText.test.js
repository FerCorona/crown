import React from 'react';
import renderer from 'react-test-renderer';
import InputText from '../InputText/index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <InputText />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});