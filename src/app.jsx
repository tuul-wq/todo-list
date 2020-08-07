import React, { Component } from 'react';
import AppHeader from './components/app-header/app-header';
import SearchInput from './components/search-input/search-input';
import TodoList from './components/todo-list/todo-list';
import SearchFilter from './components/search-filter/search-filter';
import NewTodo from './components/new-todo/new-todo';
import NoItems from './components/no-todo/no-todo';
import './app.css';

class App extends Component {
  max = 100

  state = {
    list: [
      { label: 'Make a react app', important: true, id: 1 },
      { label: 'Become a great developer', important: false, id: 2 }
    ]
  }

  deleteTodo = (id) => {
    this.setState(({ list }) => ({
      list: list.filter(item => item.id !== id)
    }));
  }

  createTodo = ({ label, important }) => {
    this.setState(({ list }) => ({
      list: list.concat({
        label,
        important,
        id: this.max++
      })
    }));
  }

  updateTodo = ({ id, payload }) => {
    this.setState(({ list }) => ({
      list: list.map(item => item.id === id ? { ...item, ...payload } : item)
    }));
  }

  render() {
    const { list } = this.state;

    return (
      <main className="app-container">
        <AppHeader />
        <div className="search-section">
          <SearchInput />
          <SearchFilter />
        </div>
        {
          list.length
            ? <TodoList list={ list } onDeleted={ this.deleteTodo } onUpdate={ this.updateTodo } />
            : <NoItems />
        }
        <div className="create-section">
          <NewTodo onCreated={ this.createTodo } />
        </div>
      </main>
    );
  }
}

export default App;
