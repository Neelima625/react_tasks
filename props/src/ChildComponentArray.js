import React from 'react';

function ChildComponentArray({ dataArray }) {
  return (
    <div>
      <h2>Child Component (Array of Objects)</h2>
      <ul>
        {dataArray.map((item) => (
          <li key={item.id}>
            {item.product} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChildComponentArray;
