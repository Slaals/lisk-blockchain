/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import SearchBox from '../../components/SearchBox';
import history from '../history';
import conf from '../../tools/config';
import s from './styles.css';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = conf.title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <SearchBox />
      </Layout>
    );
  }

}

export default HomePage;
