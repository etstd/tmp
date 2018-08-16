import background0 from '../../assets/images/backgrounds/preview_0.png';
import background1 from '../../assets/images/backgrounds/preview_1.jpg';

import tripleArrowDown from '../../assets/images/tripleArrowDown.png';

const styles = ( theme ) => ({
  root: {
    // backgroundImage: `url(${background0})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    transition: 'all 4s ease-in-out',
    position: 'relative'
  },

  '@keyframes fadeIm-0': {
    from:  { opacity: 1 },
    '16%': { opacity: 1 },
    '25%': { opacity: 0 },
    '91%': { opacity: 0 },
    to:    { opacity: 1 }
  },
 
  '@keyframes fadeIm-1': {
      from : { opacity: 0 },
      '16%': { opacity: 0 },
      '25%': { opacity: 1 },
      '41%': { opacity: 1 },
      '50%': { opacity: 0 },
      to   : { opacity: 0 }
  },
 
  '@keyframes fadeIm-2': {
      from : { opacity: 0 },
      '41%': { opacity: 0 },
      '50%': { opacity: 1 },
      '66%': { opacity: 1 },
      '75%': { opacity: 0 },
      to   : { opacity: 0 }
  },
 
  '@keyframes fadeIm-3': {
      from : { opacity: 0 },
      "66%": { opacity: 0 },
      "75%": { opacity: 1 },
      "91%": { opacity: 1 },
      to   : { opacity: 0 }
  },

  background0: {
    backgroundImage: `url(${background0})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',
    position: 'absolute',
    width: '100%',
    animationDuration: '30s',
    animationIterationCount: 'infinite',
    animationName: 'fadeIm-0'
  },
  background1: {
    backgroundImage: `url(${background1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',
    position: 'absolute',
    width: '100%',
    animationDuration: '30s',
    animationIterationCount: 'infinite',
    animationName: 'fadeIm-1'
  },
  background2: {
    backgroundImage: `url(${background0})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',
    position: 'absolute',
    width: '100%',
    animationDuration: '30s',
    animationIterationCount: 'infinite',
    animationName: 'fadeIm-2'
  },
  background3: {
    backgroundImage: `url(${background1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',
    position: 'absolute',
    width: '100%',
    animationDuration: '30s',
    animationIterationCount: 'infinite',
    animationName: 'fadeIm-3'
  },

  root_bgColor: {
    backgroundColor: '#000000',
    opacity: .7,
  },
  content: {
    height: '100vh',
    color: '#FFF',
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr'
  },
  blockLogo: {

  },
  blockLogo__MainText: {
    fontSize: '21vw',
    letterSpacing: -7,
    color: '#ffffff',
    marginTop: -40
  },
  blockLogo__SecondText: {
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 1.8,
    color: '#ffffff',
    marginLeft: 10
  },

  blockFooter: {
    display: 'flex',
    justifyContent: 'space-around'
  },

  blockFooter__description: {
    width: 368,
    height: 88,
    fontFamily: 'ProximaNova',
    fontSize: 18,
    color: '#ffffff'
  },

  blockFooter__next: {
    display: 'flex'
  },
  
  blockFooter__nextText: {
    fontFamily: 'SFProDisplay',
    width: 81,
    height: 42,
    fontSize: 14,
    fontWeight: 900,
    lineHeight: 1,
    textAlign: 'right',
    color: '#ffffff',
    marginRight: 20,
    cursor: 'pointer'
  },

  blockFooter__nextArrowsDown: {
    height: 115,
    width: 50,
    backgroundImage: `url(${tripleArrowDown})`,
    cursor: 'pointer'
  }

});

export { styles as default };