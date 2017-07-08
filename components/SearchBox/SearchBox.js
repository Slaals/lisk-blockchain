import React from 'react';
import history from '../../src/history';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    let id = e.currentTarget.value;
    let pathname = '/';
    if (id && id !== '') {
      pathname = `/transactions/${id}`;
    }
    history.push({
      pathname: pathname
    });
  }

  render() {
    return (
      <input type="text" onBlur={this.handleSearch} />
    );
  }

}

export default SearchBox;
