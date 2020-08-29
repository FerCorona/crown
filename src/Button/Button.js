import React, { Component } from 'react';

require('./styles.scss');

class Button extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    const { text, onClick, color, textColor, borderColor, type, shape } = this.props;
    const style = {};
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
  }
}

Button.defaultProps = {
  text: 'Click Me!',
  onClick: () => console.log('You clicked on me!'),
  color: '--blue-4',
  textColor: '--white',
  borderColor: '--blue-4',
  type: 'Default',
  shape: 'Round'
};

export default Button;