import React, { useState } from 'react';

const TestForm = () => {
  const [first, setfirst] = useState('');
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('submitted');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={first} onChange={(e) => setfirst(e.target.value)} />
      <p>{Date.now()}</p>
      <button>Submit</button>
    </form>
  );
};

export default TestForm;
