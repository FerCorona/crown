import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '../InputText/index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Modal />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});