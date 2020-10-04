import React from 'react';
import Label from '../Label';

require('./styles.scss');

const InputText = ({ placeholder, value, onChange, namestate, type, title, list, id }) => {
  let input = null;
  if (title) {
    input = (
      <>
        <Label size='small' text={placeholder} color='--gray-blue-4' weight='ligth_x' />
        <input className='CROWNInputText' type={type} value={value} onChange={onChange} name={namestate} />
      </>
    );
  } else {
    input = <input className='CROWNInputText' type={type} value={value} onChange={onChange} placeholder={placeholder} name={namestate} list={list} id={id} />;
  }
  return input;
};

InputText.defaultProps = {
  placeholder: 'Write on me..!',
  onChange: () => { },
  namestate: 'input',
  type: 'text',
  title: false,
  list: null,
  id: null
};

export default InputText;