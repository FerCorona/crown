import React from 'react';
import CONSTANTS from '../Common/Constants';

const Label = ({ text, color, size, weight }) => {
  const style = {
    color: `var(${color})`,
    fontSize: `${CONSTANTS.LABEL_SIZE[size]}`,
    fontWeight: `${CONSTANTS.LABEL_WEIGHT[weight]}`
  };
  return (
    <div
      className='CROWNLabel'
      style={style}
    >{text}
    </div>
  );
};

Label.defaultProps = {
  text: 'I\'m a label',
  size: 'big',
  color: '--black-0',
  weight: 'regular'
};

export default Label;