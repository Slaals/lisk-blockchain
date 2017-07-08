import React from 'react';
import PropTypes from 'prop-types';

import SearchBox from '../SearchBox';

class Block extends React.Component {

  render() {
    return (
      <div>
        <SearchBox />
        <h1>Blockchain</h1>
      </div>
    );
  }

}

export default Block;
