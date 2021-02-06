import React from 'react';

const Loader = ({ show }) => (
  show && (
    <div className='CROWNLoader'>
      <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
    </div>
  )
);

Loader.defaultProps = {
  show: false
};

export default Loader;