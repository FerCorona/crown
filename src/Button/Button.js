
import React from 'react';

require('./styles.scss');

const Button = ({ text }) => {
  return (
    <a
      className="CROWNButton"
    >
    {text}
    </a>);
}

Button.defaultProps = {
  text: 'Click Me!'
};

export default Button;