import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todo-item/todo-item';
import './todo-list.css';

function TodoList ({ list, onDeleted, onUpdate }) {

  const deleteTodo = (id) => () => {
    onDeleted(id);
  };

  const updateTodo = (id) => (payload) => {
    onUpdate({ id, payload });
  };

  return (
    <ul className="list-group">
      { list.map(({ id, ...item }) =>
        <li key={ id } className="list-group-item">
          <TodoItem
            {...item}
            onDeleted={ deleteTodo(id) }
            onUpdate={ updateTodo(id) }
          />
        </li>
      ) }
    </ul>
  );
}

TodoList.propTypes = {
  list: PropTypes.array
};

export default TodoList;
