import React from 'react';

import Label from '../Label';

const RadioButton = ({
  options,
  optionSelected,
  onChange,
  stateName,
  extraStyle
}) => (
  <div className={`CROWNRadioButton ${extraStyle}`} role='radiogroup' aria-labelledby='bulgy-radios-label'>
    {
      options.map((option, key) => (
        <label key={key}>
          <input
            type='radio'
            value={option.id}
            checked={optionSelected === option.id}
            onChange={() => onChange({
              stateName,
              value: option.id
            })}
          />
          <span className='Radio' />
          <div className='Label'>
            <Label size='small' text={option.label} color='--black-1' />
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
  onChange: isChecked => console.log(isChecked),
  extraStyle: ''
};

export default RadioButton;