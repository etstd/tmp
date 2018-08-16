import React, { Component } from 'react'
import injectStyles from 'react-jss'
import styles from './styles';

class SectionMorePopularProducts extends Component {
  render(){
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        More Popular Products
      </section>
    )
  }
};

export default injectStyles(styles)(SectionMorePopularProducts);