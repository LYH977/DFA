import React, { lazy, Suspense } from 'react';
// import TestFaker from './testing/TestFaker';
import TestLodash from './testing/TestLodash';
// import TestMoment from './testing/TestMoment';
import { Eren } from './assets';
import TestForm from './testing/TestForm';
import TestHtmlInputType from './testing/TestHtmlInputType';

const TestMoment = lazy(() => import('./testing/TestMoment'));

const Component = () => <>1</>;

// const TestFaker = lazy(() => Eren().then((x) => ({ default:<Component/> })));
// const TestFaker = lazy(() =>Eren().then(x=>x.default)

const AppTest = () => {
  return (
    <div>
      {/* <TestLodash /> */}
      <p>I am P</p>
      <h1>I am h1</h1>
      <h2>I am h2</h2>
      <h3>I am h3</h3>
      <h4>I am h4</h4>
      {/* <TestForm /> */}
      <TestHtmlInputType />
      {/* <Suspense fallback='loading faker'>
        <TestFaker />
      </Suspense> */}
      {/* <TestFaker /> */}
      {/* <TestMoment /> */}
    </div>
  );
};

export default AppTest;
