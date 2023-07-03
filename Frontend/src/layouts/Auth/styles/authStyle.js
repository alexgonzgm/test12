import { whiteColor, blackColor, hexToRgb } from 'assets/jss/material-ui-react'

const authStyle = (theme) => ({
  wrapper: {
    height: 'auto',
    minHeight: '100vh',
    position: 'relative',
    top: '0',
  },
  fullPage: {
    padding: '120px 0',
    position: 'relative',
    minHeight: '100vh',
    display: 'flex!important',
    margin: '0',
    border: '0',
    color: blackColor,
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      minHeight: '700px!important',
    },
    '& footer': {
      position: 'absolute',
      bottom: '0',
      width: '100%',
      border: 'none !important',
    },
    '&:before': {
      backgroundColor: '#fff',
    },
    '&:before,&:after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      zIndex: '2',
    },
  },
})

export default authStyle