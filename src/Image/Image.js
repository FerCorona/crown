import React from 'react';
import { IMAGE_SIZE } from '../Common/Constants';

import image from '../Common/Assets/crown.png';

require('./styles.scss');

const Image = ({ src, size, shadow }) => {
  const style = {
    width: `${IMAGE_SIZE[size]}`,
    height: `${IMAGE_SIZE[size]}`
  };
  if (shadow) {
    style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)';
  }
  return (
    <div className='CROWNImage' style={style}>
      <img src={src} style={style} />
    </div>
  );
};

Image.defaultProps = {
  src: image,
  size: 'medium',
  shadow: true
};

export default Image;