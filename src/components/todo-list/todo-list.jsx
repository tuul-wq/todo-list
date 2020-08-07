import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todo-item/todo-item';
import './todo-list.css';

function TodoList ({ list }) {
  return (
    <ul className="list-group todo-list">
      { list.map(({ id, ...item }) =>
        <li key={id} className="list-group-item">
          <TodoItem {...item} />
        </li>
      ) }
    </ul>
  );
}

TodoList.propTypes = {
  list: PropTypes.array
};

export default TodoList;
