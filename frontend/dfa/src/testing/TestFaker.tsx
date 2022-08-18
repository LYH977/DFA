import React from 'react';
import { faker } from '@faker-js/faker';

const TestFaker = () => {
  return (
    <div
      style={{ backgroundColor: 'lightgreen', height: '100px', width: '100vw' }}
    >
      IamFaker
      {faker.animal.bear()}
    </div>
  );
};

export default TestFaker;
