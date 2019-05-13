import React, { Fragment } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import styles from '../styles'

const AuthForm = ({ classes, onSignIn, onOauth }) => {
  return (
    <List>
      <ListItem>
        <Button variant="contained" className={classes.fluid} onClick={onSignIn}>
          Sign in with Endpass
        </Button>        
      </ListItem>
      <ListItem>
        <Button variant="contained" className={classes.fluid} onClick={onOauth}>
          Get accounts from OAuth
        </Button>        
      </ListItem>
    </List>
  )
}

export default withStyles(styles)(AuthForm)
