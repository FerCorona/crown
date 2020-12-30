import React from 'react';

import Button from './../Button';

const Card = ({ src, title, content, buttonConfig, customButton }) => (
  <div className='CROWNCard'>
    <div
      className='Card'
      style={
        {
          backgroundImage: `url(${src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative'
        }
      }>
      <div className='Content'>
        <div className='Title'>{title}</div>
        <div className='ContentCard'>{content}</div>
        <div className='Others'>{customButton ? customButton : <Button {...buttonConfig} />}</div>
      </div>
    </div>
  </div>
);

Card.defaultProps = {
  src: 'linear-gradient(var(--red-4), var(--pink-1))',
  title: 'Card Title',
  content: 'Card Content  ---- Card Content ---- Card Content  ---- Card Content ---- Card Content  ---- Card Content ---- Card Content  ---- Card Content ----',
  buttonConfig: {
    shape: 'Square',
    color: '--gray-blue-3',
    text: 'Aceptar',
    onClick: () => { }
  },
  customButton: false
};

export default Card;