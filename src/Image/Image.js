import React from 'react';

const Image = ({
  src,
  frame,
  shadow,
  size,
  extraStyle
}) => {
  const backgroundImage = src ? `url(${src})` : 'linear-gradient(45deg, var(--red-1), var(--pink-1))';
  const onlyImage = (
    <div
      className='Image'
      style={
        {
          backgroundImage,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative'
        }
      }
    />
  );
  if (!frame) {
    return (
      <div className={`CROWNImage ${shadow ? 'Shadow' : ''} ${extraStyle}`} style={size}>
        {onlyImage}
      </div>
    );
  }
  return (
    <div className={`CROWNImage ${shadow ? 'Shadow' : ''} ${extraStyle}`} style={size}>
      <div
        className='ImageBlur'
        style={
          {
            backgroundImage,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative'
          }
        }
      >
        <div className='Blur'>
          {onlyImage}
        </div>
      </div>
    </div>
  );
};

Image.defaultProps = {
  shadow: true,
  frame: true,
  size: {
    width: '300px',
    height: '350px'
  },
  extraStyle: ''
};

export default Image;