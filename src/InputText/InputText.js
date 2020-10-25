import React from 'react';
import Label from '../Label';

const InputText = ({ placeholder, value, onChange, namestate, type, title, id, extraStyle }) => {
  let input = null;
  if (title) {
    input = (
      <>
        <Label size='small' text={placeholder} color='--black-0' weight='ligth_x' />
        <input className={`CROWNInputText ${extraStyle}`} type={type} value={value} onChange={onChange} name={namestate} />
      </>
    );
  } else {
    input = <input className={`CROWNInputText ${extraStyle}`} type={type} value={value} onChange={onChange} placeholder={placeholder} name={namestate} id={id} />;
  }
  return input;
};

InputText.defaultProps = {
  placeholder: 'Write on me..!',
  onChange: () => { },
  namestate: 'input',
  type: 'text',
  title: false,
  id: null,
  extraStyle: ''
};

export default InputText;