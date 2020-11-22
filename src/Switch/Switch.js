import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Label from '../Label';

const Switch = ({ isChecked, onChange, text, stateName }) => {
  const id = uuidv4();
  return (
    <div className='CROWNSwitch'>
      <input
        type='checkbox'
        id={id}
        className='checkbox colorSwitch'
        defaultChecked={isChecked}
        onChange={() => onChange({
          stateName,
          value: !isChecked
        })}
      />
      <label htmlFor={id} className='switch colorSwitch' />
      {
        text && (
          <div className='Label'>
            <Label size='small' text={text} color='--black-0' weight='ligth_x' />
          </div>
        )
      }
    </div>
  );
};

Switch.defaultProps = {
  onChange: () => {},
  color: '--yellow-4',
  text: null
};

export default Switch;