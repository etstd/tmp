import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import injectStyles from 'react-jss'
import styles from './styles';

import background0 from '../../assets/images/backgrounds/preview_0.png';
import background1 from '../../assets/images/backgrounds/preview_1.jpg';

const space = (<div></div>)

class SectionPreview extends Component {

  constructor(props){
    super(props);

    this.state = {
      backgrounds: [background0, background1],
      active: 0
    }
  }

  nextActiveBackground = () => {
    this.setState(prev => {
      const next = {
        ...prev,
        active: prev.active !== prev.backgrounds.length - 1 ? prev.active + 1 : 0
      }
      return next
    })
  }

  scrollToNextSession = () => {
    const to = ReactDOM.findDOMNode(this).scrollHeight;

    setInterval(() => {
      console.log(ReactDOM.findDOMNode(this).scrollTop);
      console.log(ReactDOM.findDOMNode(this).scrollHeight);
    }, 1000);
    
    // ReactDOM.findDOMNode(this).scrollIntoView({ behavior: 'smooth' })
    // window.scroll(0, to);
    window.scroll({ top: to, left: 0, behavior: 'smooth' });
  }

  render(){
    const { classes } = this.props;

    const logoSection = (
      <div className={classes.blockLogo}>
        <div className={classes.blockLogo__SecondText}>
          smart
        </div>
        <div className={classes.blockLogo__MainText}>
          urban
        </div>
      </div>
    );

    const footerSection = (
      <div className={classes.blockFooter}>
        <div className={classes.blockFooter__description}>
          Платформа позволяет заинтересованным сторонам узнать друг о друге, оценить потенциал
          сотрудничества, заключить партнерство и реализовать проект.
        </div>

        <div className={classes.blockFooter__next}>
          <div className={classes.blockFooter__nextText}>
            Узнать больше о проекте
          </div>
          <div 
            className={classes.blockFooter__nextArrowsDown}
            onClick={this.scrollToNextSession}
          ></div>
        </div>
      </div>
    );
    
    return (
      <section className={classes.root}> 
        <div className={classes.background0}></div>
        <div className={classes.background1}></div>
        <div className={classes.background2}></div>
        <div className={classes.background3}></div>

        {/* <div className={classes.root_contentWrapper}> */}
          <div className={classes.root_bgColor}>
            <div className={classes.content}>
              {space}
              {logoSection}
              {footerSection}
            </div>
          </div>
        {/* </div> */}
      </section>
    )
  }
};

export default injectStyles(styles)(SectionPreview);