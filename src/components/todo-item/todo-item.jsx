import React from 'react';
import './todo-item.css';

function TodoItem({ label, important = false }) {
  const style = {
    color: important ? 'tomato' : 'black'
  };
  
  return (
    <div className="todo-item">
      <span style={style} className="title">{ label }</span>

      <div className="buttons">
        <button className="btn btn-outline-success btn-sm">
          <i className="fa fa-exclamation" />
        </button>
        <button className="btn btn-outline-danger btn-sm">
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </div>
  )
}

export default TodoItem;
