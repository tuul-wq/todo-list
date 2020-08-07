import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './todo-item.css';

class TodoItem extends Component {
  state = {
    done: false,
    important: false
  }

  toggleDone = () => {
    this.setState(state => ({ done: !state.done }));
  }

  toggleImportant = () => {
    this.setState(state => ({ important: !state.important }));
  }

  removeTodo = () => {

  }

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    return (
      <div className={`todo-item${ done ? ' done' : '' }`}>
        <span
          className={`title${ important ? ' important' : '' }`}
          onClick={this.toggleDone}
        >{ label }</span>

        <div>
          <button className={`btn btn${ important ? '' : '-outline' }-success btn-sm`} onClick={this.toggleImportant}>
            <i className="fa fa-exclamation" />
          </button>
          <button className="btn btn-outline-danger btn-sm" onClick={this.removeTodo}>
            <i className="fa fa-trash-o" />
          </button>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  label: PropTypes.string,
  important: PropTypes.bool
};

export default TodoItem;
