import React from 'react';
import _ from 'lodash';

const TestLodash = () => {
  return (
    <div style={{ backgroundColor: 'pink', height: '100px', width: '100vw' }}>
      IamLodash{_.random(1, 10)}
    </div>
  );
};

export default TestLodash;
