import React from 'react';
import renderer from 'react-test-renderer';
import CheckBox from '../CheckBox/index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <CheckBox id={1234} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});