import React from 'react';
import TodoItem from '../todo-item/todo-item';
import './todo-list.css';

function TodoList({ list }) {
  return (
    <ul className="list-group todo-list">
      { list.map(({ id, ...item }) =>
        <li key={id} className="list-group-item">
          <TodoItem {...item} />
        </li>
      ) }
    </ul>
  )
};

export default TodoList;
