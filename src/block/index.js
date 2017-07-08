import React, { PropTypes } from 'react';
import history from '../history';

import Layout from '../../components/Layout';
import Block from '../../components/Block';

import s from './styles.css';

class BlockPage extends React.Component {

  componentDidMount() {
    history.listen(lsn => {
      console.log(lsn);
      this.updateBlockchain('toto');
    });
  }

  updateBlockchain(id) {
    console.log(id);
  }

  render() {
    return (
      <Layout className={s.content}>
        <Block />
      </Layout>
    );
  }

}

export default BlockPage;
