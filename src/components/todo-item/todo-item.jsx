import React from 'react';
import PropTypes from 'prop-types';
import './todo-item.css';

function TodoItem({ label, important, done, onUpdate, onDeleted }) {

  const updateTodo = (payload) => () => {
    onUpdate(payload);
  };

  const todoClass = `todo-item${ done ? ' done' : '' }`;
  const titleClass = `title${ important ? ' important' : '' }`;
  const buttonClass = `btn btn${ important ? '' : '-outline' }-success btn-sm`;

  return (
    <div className={ todoClass }>
      <span className={ titleClass } onClick={ updateTodo({ done: !done }) }>{ label }</span>

      <div>
        <button className={ buttonClass } onClick={ updateTodo({ important: !important }) }>
          <i className="fa fa-exclamation" />
        </button>
        <button className="btn btn-outline-danger btn-sm" onClick={ onDeleted }>
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  label: PropTypes.string,
  important: PropTypes.bool,
  done: PropTypes.bool,
  onUpdate: PropTypes.func
};

export default TodoItem;
