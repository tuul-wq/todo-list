import React from 'react';
import './app-header.css';

function AppHeader({ total, done }) {
  const status = `total - ${ total }, done - ${ done }`;

  return (
    <header className="header">
      <h1 className="title">Todo app</h1>
      <span className="status">{ status }</span>
    </header>
  );
}

export default AppHeader;
