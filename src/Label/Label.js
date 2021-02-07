import React from 'react';

const Label = ({
  text,
  color,
  size,
  weight,
  extraStyle
}) => {
  const style = {
    color: `var(${color})`,
    fontSize: size,
    fontWeight: weight
  };
  return (
    <div
      className={`CROWNLabel ${extraStyle}`}
      style={style}
    >{text}
    </div>
  );
};

Label.defaultProps = {
  text: 'I\'m a label',
  size: '22px',
  color: '--black-1',
  weight: '400',
  extraStyle: ''
};

export default Label;