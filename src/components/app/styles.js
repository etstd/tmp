const styles = () => ({
  App: {
    textAlign: 'center'
  },
  
  'App-logo':{
    animation: "App-logo-spin infinite 20s linear",
    height: 80
  },

  'App-header':{
    backgroundColor: '#222',
    height: 150,
    padding: 20,
    color: 'white'
  },
  
  'App-title': {
    fontSize: '1.5em'
  },

  'App-intro': {
    'fontSize': 'large'
  },
  
  '@keyframes App-logo-spin': {
    from: { 
      transform: 'rotate(0deg)'
    },
    to: { 
      transform: 'rotate(360deg)'
    }
  }

})

export { styles as default }