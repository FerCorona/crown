import React from 'react';
import Label from '../Label';

const InputText = ({ placeholder, value, onChange, namestate, type, title, extraStyle, stateName }) => {
  let input = null;
  if (title) {
    input = (
      <>
        <Label size='small' text={placeholder} color='--black-0' weight='ligth_x' />
        <input
          className={`CROWNInputText ${extraStyle}`}
          type={type}
          value={value}
          onChange={e => onChange({
            stateName,
            value: e.target.value
          })}
          name={namestate}
        />
      </>
    );
  } else {
    input = (
      <input
        placeholder={placeholder}
        className={`CROWNInputText ${extraStyle}`}
        type={type}
        value={value}
        onChange={e => onChange({
          stateName,
          value: e.target.value
        })}
        name={namestate}
      />
    );
  }
  return input;
};

InputText.defaultProps = {
  placeholder: 'Write on me..!',
  onChange: () => { },
  namestate: 'input',
  type: 'text',
  title: false,
  extraStyle: ''
};

export default InputText;