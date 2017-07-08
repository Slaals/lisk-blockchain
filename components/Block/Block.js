import React from 'react';
import PropTypes from 'prop-types';
import lisk from 'lisk-js';

import SearchBox from '../SearchBox';

class Block extends React.Component {

  componentWillMount() {
    this.updateBlock();
  }

  componentDidUpdate() {
    this.updateBlock();
  }

  updateBlock() {
    if (this.props.blockId) {
      lisk.api().getBlock(this.props.blockId, function(block) {
        console.log(block);
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Blockchain</h1>
      </div>
    );
  }

}

export default Block;
