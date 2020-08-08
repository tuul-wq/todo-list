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

  onCreated = (event) => {
    event.preventDefault();

    if (!this.state.label) return;
    this.props.onCreated({ ...this.state });
    this.setState({ label: '', important: false });
  }

  render() {
    const { label, important } = this.state;
    const buttonClass = `btn btn${ important ? '' : '-outline' }-success btn-sm`;

    return (
      <form className="new-todo" onSubmit={ this.onCreated }>
        <input
          type="text"
          className="form-control"
          value={ label }
          placeholder="New todo"
          onChange={ this.handleChange }
        />
        <button type="button" className={ buttonClass } onClick={ this.toggleImportant }>
          <i className="fa fa-exclamation" />
        </button>
        <button type="submit" className="btn btn-outline-success btn-sm">
          <i className="fa fa-plus"/>
        </button>
      </form>
    );
  }
}

NewTodo.propTypes = {
  onCreated: PropTypes.func
}

export default NewTodo;
