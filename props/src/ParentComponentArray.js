import React from 'react';
import ChildComponentArray from './ChildComponentArray';

function ParentComponentArray() {
  const dataArray = [
    { id: 1, product: 'Laptop', price: 1200 },
    { id: 2, product: 'Phone', price: 800 },
    { id: 3, product: 'Tablet', price: 500 },
  ];

  return (
    <div>
      <h1>Parent Component (Array of Objects)</h1>
      <ChildComponentArray dataArray={dataArray} />
    </div>
  );
}

export default ParentComponentArray;