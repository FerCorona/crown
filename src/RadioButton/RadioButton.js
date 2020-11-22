import React from 'react';

import Label from '../Label';

const RadioButton = ({ options, selectedOption, onChange, stateName }) => (
  <div className='CROWNRadioButton' role='radiogroup' aria-labelledby='bulgy-radios-label'>
    {
      options.map(option => (
        <label>
          <input
            type='radio'
            value={option.id}
            checked={selectedOption === option.id}
            onChange={() => onChange({
              stateName,
              value: option.id
            })}
          />
          <span className='Radio' />
          <div className='Label'>
            <Label size='small' text={option.label} color='--black-0' weight='ligth_x' />
          </div>
        </label>
      ))
    }
  </div>
);

RadioButton.defaultProps = {
  options: [
    {
      label: 'Si',
      id: 'si_option'
    },
    {
      label: 'No',
      id: 'no_option'
    },
    {
      label: 'Tal vez',
      id: 'tal_vez_option'
    }
  ],
  onChange: isChecked => console.log(isChecked)
};

export default RadioButton;