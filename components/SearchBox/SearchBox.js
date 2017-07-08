import React from 'react';
import history from '../../src/history';

import Block from '../Block';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount() {
    let id = this.props.defaultId;
    if (id) {
      this.blockId = id;
    }
  }

  handleSearch(e) {
    let id = e.currentTarget.value;
    let pathname = '/';
    if (id && id !== '') {
      pathname = `/blocks/${id}`;
      this.blockId = id;
    }
    history.push({
      pathname: pathname
    });
  }

  render() {
    return (
      <div>
        <input type="text" onBlur={this.handleSearch} />
        <Block blockId={this.blockId} />
      </div>
    );
  }

}

export default SearchBox;
