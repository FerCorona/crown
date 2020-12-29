import React from 'react';

import image from '../Common/Assets/crown.jpg';

const Image = ({ src }) => (
  <div className='CROWNImage'>
    <div
      className='ImageBlur'
      style={
        {
          backgroundImage: `url(${src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative'
        }
      }
    >
      <div className='Blur'>
        <div
          className='Image'
          style={
            {
              backgroundImage: `url(${src})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              position: 'relative'
            }
          }
        />
      </div>
    </div>
  </div>
);

Image.defaultProps = {
  src: image,
  size: 'medium',
  shadow: true
};

export default Image;