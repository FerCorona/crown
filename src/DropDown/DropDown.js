import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import InputText from '../InputText';

require('./styles.scss');

const DropDown = ({ options }) => {
  const id = uuidv4();
  return (
    <>
      <InputText list={id} id={`${id}-id`} />
      <datalist id={id}>
        {
          options.map(value => <option value={value} />)
        }
      </datalist>
    </>
  );
};

DropDown.defaultProps = {
  options: [ 'Button', 'Common', 'DropDpown', 'Image', 'InputText', 'Label', 'RadioButton', 'Switch' ]
};

export default DropDown;