import React from 'react';

const DropDown = ({ optionSelected, options, onChange, stateName }) => (
  <div className='CROWNDropDown'>
    <div className='Options'>
      {optionSelected}
    </div>
    <div className='ListContent'>
      {
        options.map((option, index) => (
          <div
            className='Option'
            key={`option-${index}`}
            onClick={() => onChange({
              stateName,
              value: option
            })}
          >
            {option}
          </div>
        ))
      }
    </div>
  </div>
);

DropDown.defaultProps = {
  options: ['Button', 'Common', 'DropDown', 'Image', 'InputText', 'Label', 'RadioButton', 'Switch'],
  placeholder: 'Selecciona una opcion',
  onChange: () => {}
};

export default DropDown;