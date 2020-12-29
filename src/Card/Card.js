import React from 'react';

import Button from './../Button';
import image_1 from '../Common/Assets/card_1.jpg';
import image_2 from '../Common/Assets/card_2.jpg';

const Card = ({ imagen }) => {
  const image = imagen === 1 ? image_1 : image_2;
  return (
    <div className='CROWNCard'>
      <div
        className='Card'
        style={
          {
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative'
          }
        }>
        <div className='Content'>
          <div className='Title'>Card Title</div>
          <div className='ContentCard'>Card Content  ---- Card Content ---- Card Content  ---- Card Content ---- Card Content  ---- Card Content ---- Card Content  ---- Card Content ----</div>
          <div className='Others'><Button shape='Square' color='--pink-1' text='Aceptar' onClick={() => {}} /></div>
        </div>
      </div>
    </div>
  );
};

export default Card;