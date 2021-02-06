import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import Label from '../Label';

const CheckBox = ({ text, onChange, isChecked, stateName }) => (
  <div className='CROWNCheckBox Active'>
    <input
      id={uuidv4()}
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
          <Label size='small' text={text} color='--black-0' weight='ligth_x' />
        </div>
      )
    }
  </div>
);

CheckBox.defaultProps = {
  text: null,
  isChecked: false,
  onChange: () => { }
};

export default CheckBox;