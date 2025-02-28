import React from 'react';

function ChildComponent({ data }) {
  return (
    <div>
      <h2>Child Component (Single Object)</h2>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>City: {data.city}</p>
    </div>
  );
}

export default ChildComponent;