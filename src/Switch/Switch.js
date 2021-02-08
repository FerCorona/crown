import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Label from '../Label';

const Switch = ({
  id,
  isChecked,
  onChange,
  text,
  stateName,
  extraStyle
}) => (
  <div className={`CROWNSwitch ${extraStyle}`}>
    <input
      type='checkbox'
      id={id || uuidv4()}
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
Switch.defaultProps = {
  onChange: () => { },
  text: null,
  extraStyle: ''
};

export default Switch;