import React, { Component } from 'react';

class SearchFilter extends Component {
  state = {
    isMobile: false
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    if (window.innerWidth < 576) {
      if (!this.state.isMobile) {
        this.setState({ isMobile: true });
        console.log(this.state.isMobile);
      }
    } else {
      if (this.state.isMobile) {
        this.setState({ isMobile: false });
        console.log(this.state.isMobile);
      }
    }
  }

  setFilter = (type) => () => {
    const { filterType, onSetFilter } = this.props;
    if (type === filterType) return;

    onSetFilter(type);
  };

  render() {
    const { filterType } = this.props;
    const mobileClass = this.state.isMobile ? ' btn-sm' : '';
    const allClass = `btn btn${ filterType === 'all' ? '' : '-outline' }-success${ mobileClass }`;
    const activeClass = `btn btn${ filterType === 'active' ? '' : '-outline' }-secondary${ mobileClass }`;
    const doneClass = `btn btn${ filterType === 'done' ? '' : '-outline' }-secondary${ mobileClass }`;

    return (
      <div className="btn-group">
        <button
          type="button"
          className={ allClass }
          onClick={ this.setFilter('all') }
        >All</button>
        <button
          type="button"
          className={ activeClass }
          onClick={ this.setFilter('active') }
        >Active</button>
        <button
          type="button"
          className={ doneClass }
          onClick={ this.setFilter('done') }
        >Done</button>
      </div>
    )
  }
}

export default SearchFilter;
