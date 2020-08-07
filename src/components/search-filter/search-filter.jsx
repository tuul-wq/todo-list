import React, { Component } from 'react';

class SearchFilter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button type="button" className="btn btn-success">All</button>
        <button type="button" className="btn btn-outline-secondary">Active</button>
        <button type="button" className="btn btn-outline-secondary">Done</button>
      </div>
    );
  }
}

export default SearchFilter;
