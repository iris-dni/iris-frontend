import React from 'react';

const Autocomplete = ({ options, endpoint, typeaheadSearch }) => (
  <div>
    <input onKeyUp={(e) => typeaheadSearch(e.target.value)} />
    {(options || []).map((option) => (
      <div key={option.id}>{option.name}</div>
    ))}
  </div>
);

export default Autocomplete;
