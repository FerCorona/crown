import React from 'react';
import { LABEL_SIZE,LABEL_WEIGHT } from '../Common/Constants';

const Label = ({ text, color, size, weight }) => {
  const style = {
    color: `var(${color})`,
    fontSize: `${LABEL_SIZE[size]}`,
    fontWeight: `${LABEL_WEIGHT[weight]}`
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
  size: 'small',
  color: '--black-0',
  weight: 'regular'
};

export default Label;