import React from 'react';
import renderer from 'react-test-renderer';
import DropDown from '../DropDown/index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <DropDown />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});