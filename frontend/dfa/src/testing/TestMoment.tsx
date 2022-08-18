import React from 'react';
import moment from 'moment';

const TestMoment = () => {
  return (
    <div style={{ backgroundColor: 'yellow', height: '100px', width: '100vw' }}>
      IamMoment
      {moment().format('MMMM Do YYYY, h:mm:ss a')}fgdfgfd
    </div>
  );
};

export default TestMoment;
