import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../Image/index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Image />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});