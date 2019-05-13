import React, { Fragment } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import styles from '../styles'

const AuthForm = ({ classes, onSignIn, onOauth, onGetData }) => {
  return (
    <Fragment>
      <Button variant="contained" className={classes.fluid} onClick={onSignIn}>
        Sign in with Endpass
      </Button>
      <Button variant="contained" className={classes.fluid} onClick={onOauth}>
        Oauth sign in
      </Button>
      <Button variant="contained" className={classes.fluid} onClick={onGetData}>
        Get accounts from OAuth
      </Button>
    </Fragment>
  )
}

export default withStyles(styles)(AuthForm)
