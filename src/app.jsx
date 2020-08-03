import React from 'react';
import AppHeader from './components/app-header/app-header';
import SearchInput from './components/search-input/search-input';
import TodoList from './components/todo-list/todo-list';
import SearchFilter from './components/search-filter/search-filter';
import './app.css';

function App() {

  const list = [
    { label: 'Make a react app', important: true, id: 1 },
    { label: 'Become a great developer', important: false, id: 2 }
  ];

  return (
    <main className="app-container">
      <AppHeader />
      <div className="search-section">
        <SearchInput />
        <SearchFilter />
      </div>
      <TodoList list={list}/>
      <button className="btn btn-primary">yo</button>
    </main>
  );
}

export default App;
