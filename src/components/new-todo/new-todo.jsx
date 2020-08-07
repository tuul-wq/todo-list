import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './new-todo.css';

class NewTodo extends Component {
  state = {
    label: '',
    important: false
  }

  toggleImportant = () => {
    this.setState(state => ({
      important: !state.important
    }));
  }

  handleChange = (event) => {
    this.setState({ label: event.target.value });
  }

  onCreated = () => {
    if (!this.state.label) return;
    this.props.onCreated({ ...this.state });
    this.setState({ label: '', important: false });
  }

  render() {
    const { label, important } = this.state;
    const buttonClass = `btn btn${ important ? '' : '-outline' }-success btn-sm`;

    return (
      <div className="new-todo">
        <input
          type="text"
          className="form-control"
          value={ label }
          placeholder="New todo"
          onChange={ this.handleChange }
        />
        <button className={ buttonClass } onClick={ this.toggleImportant }>
          <i className="fa fa-exclamation" />
        </button>
        <button className="btn btn-outline-success btn-sm" onClick={ this.onCreated }>
          <i className="fa fa-plus"/>
        </button>
      </div>
    );
  }
}

NewTodo.propTypes = {
  onCreated: PropTypes.func
}

export default NewTodo;
