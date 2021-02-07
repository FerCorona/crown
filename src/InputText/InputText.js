import React from 'react';
import Label from '../Label';

const InputText = ({
  placeholder,
  value,
  onChange,
  type,
  title,
  extraStyle,
  stateName }) => {
  let input = null;
  if (title) {
    input = (
      <>
        <Label size='small' text={placeholder} color='--black-1' />
        <input
          className={`CROWNInputText ${extraStyle}`}
          type={type}
          value={value}
          onChange={e => onChange({
            stateName,
            value: e.target.value
          })}
          name={stateName}
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
        name={stateName}
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