import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../Loader/index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Loader />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});