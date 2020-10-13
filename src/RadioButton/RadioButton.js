import React from 'react';

import Label from '../Label';

require('./styles.scss');

const RadioButton = ({ options }) => (
  <div className='CROWNRadioButton' role='radiogroup' aria-labelledby='bulgy-radios-label'>
    {
      options.map(option => (
        <label>
          <input type='radio' name='options' checked />
          <span className='Radio' />
          <div className='Label'>
            <Label size='small' text={option} color='--black' weight='ligth_x' />
          </div>
        </label>
      ))
    }
  </div>
);

RadioButton.defaultProps = {
  options: [ 'Si', 'No', 'Tal vez' ]
};

export default RadioButton;