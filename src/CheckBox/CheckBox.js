import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import Label from '../Label';

const CheckBox = ({
  id,
  text,
  onChange,
  isChecked,
  stateName,
  extraStyle
}) => (
  <div className={`CROWNCheckBox ${extraStyle}`}>
    <input
      id={id || uuidv4()}
      type='checkbox'
      className='Active'
      onChange={() => onChange({
        stateName,
        value: !isChecked
      })}
      checked={isChecked}
    />
    {
      text && (
        <div className='Label'>
          <Label size='small' text={text} color='--black-1' />
        </div>
      )
    }
  </div>
);

CheckBox.defaultProps = {
  text: null,
  isChecked: false,
  onChange: () => { },
  extraStyle: ''
};

export default CheckBox;