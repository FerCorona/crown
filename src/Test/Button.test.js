import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button/index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Button />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree.props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});