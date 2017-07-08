import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import SearchBox from '../../components/SearchBox';

import s from './styles.css';

class BlockPage extends React.Component {

  componentWillMount() {
    this.id = this.props.route.params.id;
  }

  render() {
    return (
      <Layout className={s.content}>
        <SearchBox defaultId={this.id} />
      </Layout>
    );
  }

}

export default BlockPage;
