import React, { Component } from 'react';
import injectStyles from 'react-jss'
import styles from './styles';

import Preview from '../preview';
import MorePopularProducts from '../more-popular-products';


class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.App}>
        <Preview/>
        <MorePopularProducts/>
      </div>
    );
  }
};

export default injectStyles(styles)(App);
