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
    ],
    filterType: 'all',
    filterLabel: '',
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

  setFilterByType = (type) => {
    this.setState({ filterType: type });
  }

  setFilterByLabel = (label) => {
    this.setState({ filterLabel: label });
  }

  render() {
    const { list, filterType, filterLabel } = this.state;

    const doneAmount = list.filter(item => item.done).length;
    const totalAmount = list.length;

    let filteredList = filterByType(list, filterType);
    if (filterLabel) {
      filteredList = filterByLabel(filteredList, filterLabel);
    }

    return (
      <main className="app-container">
        <AppHeader total={ totalAmount } done={ doneAmount }/>
        <div className="search-section">
          <SearchInput onFilter={ this.setFilterByLabel }/>
          <SearchFilter filterType={ filterType } onSetFilter={ this.setFilterByType } />
        </div>
        {
          filteredList.length
            ? <TodoList list={ filteredList } onDeleted={ this.deleteTodo } onUpdate={ this.updateTodo } />
            : <NoItems />
        }
        <div className="create-section">
          <NewTodo onCreated={ this.createTodo } />
        </div>
      </main>
    );
  }
}

function filterByType(list, type) {
  switch(type) {
    case 'active':
      return list.filter(item => !item.done);
    case 'done':
      return list.filter(item => item.done);
    case 'all':
    default:
      return list;
  }
}

function filterByLabel(list, text) {
  return list.filter(item => new RegExp(text, 'gi').test(item.label));
}

export default App;
