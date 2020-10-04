import React from 'react';
import CONSTANTS from '../Common/Constants';

require('./styles.scss');

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
  size: 'medium',
  color: '--pink-4',
  weight: 'regular'
};

export default Label;