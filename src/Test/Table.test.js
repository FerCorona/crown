import React from 'react';
import renderer from 'react-test-renderer';
import Table from '../Table/index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Table />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});