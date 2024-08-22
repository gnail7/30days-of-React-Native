
function globalStyles(theme){
  console.log('theme.colors.background', theme.colors.background)
  return {
    container: {
      display: "flex",
      flexDirection: 'column',
      flex: 1,
      backgroundColor: theme.colors.background,
      color: theme.colors.text,
      textColor: theme.colors.text,
    },
    flex: {
      display: 'flex',
    },
    flexCenter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
    flexSpaceAround: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    test: {
      color: 'red',
      background: 'blue'
    }
  }
}

export default globalStyles;
