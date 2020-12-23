import React from 'react';

const Loader = ({ show }) => (
  show && (
    <div className='CROWNLoader'>
      <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
    </div>
  )
);

Loader.defaultProps = {
  color: '--indigo-4',
  show: false
};

export default Loader;