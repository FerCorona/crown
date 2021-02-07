import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Label from '../Label';

const Switch = ({
  isChecked,
  onChange,
  text,
  stateName,
  extraStyle
}) => {
  const id = uuidv4();
  return (
    <div className={`CROWNSwitch ${extraStyle}`}>
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
            <Label size='small' text={text} color='--black-1' />
          </div>
        )
      }
    </div>
  );
};

Switch.defaultProps = {
  onChange: () => {},
  text: null,
  extraStyle: ''
};

export default Switch;