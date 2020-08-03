import React from 'react';

function SearchFilter() {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-outline-success">All</button>
      <button type="button" className="btn btn-outline-secondary">Active</button>
      <button type="button" className="btn btn-outline-secondary">Done</button>
    </div>
  )
}

export default SearchFilter;
