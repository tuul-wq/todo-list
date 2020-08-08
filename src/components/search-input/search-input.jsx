import React from 'react';

function SearchInput({ onFilter }) {
  const handleChange = (event) => {
    onFilter(event.target.value);
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Type to search"
      onChange={ handleChange }
    />
  );
};

export default SearchInput;
