import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const data = {
    name: 'neelima',
    age: 33,
    city: 'hyderabad',
  };

  return (
    <div>
      <h1>Parent Component (Single Object)</h1>
      <ChildComponent data={data} />
    </div>
  );
}

export default ParentComponent;