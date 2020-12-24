import React from 'react';

const ProgressBar = ({ percentage }) => (
  <div class="container">
  <h3>Loading, please wait.</h3>
  <div class="progress-bar">
    <div class="shadow"></div>
  </div>
</div>
);

ProgressBar.defaultProps = {
  percentage: 0
};

export default ProgressBar;