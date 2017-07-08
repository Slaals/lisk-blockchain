import React from 'react';
import history from '../../src/history';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    history.push({
      pathname: `/transactions/${e.currentTarget.value}`
    });
  }

  render() {
    return (
      <input type="text" onBlur={this.handleSearch} />
    );
  }

}

export default SearchBox;
