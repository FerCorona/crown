import React from 'react';

const Button = ({
  text,
  onClick,
  color,
  textColor,
  borderColor,
  type,
  shape,
  shadow
}) => {
  const style = {
    boxShadow: shadow && '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  };
  switch (type) {
    case 'Secondary':
      style.border = ` 2px solid var(${borderColor})`;
      style.color = `var(${textColor})`;
      break;
    case 'Text':
      style.border = 'none';
      style.color = `var(${textColor})`;
      style.boxShadow = 'none';
      break;
    default:
      style.backgroundColor = `var(${color})`;
      style.color = `var(${textColor})`;
      break;
  };
  return (
    <a
      className={`CROWNButton ${shape}`}
      style={style}
      onClick={onClick}
    >
      {text}
    </a>
  );
};

Button.defaultProps = {
  text: 'Click Me!',
  onClick: () => console.log('You clicked on me!'),
  color: '--blue-4',
  textColor: '--white',
  borderColor: '--blue-4',
  type: 'Default',
  shape: 'Round',
  shadow: true
};

export default Button;