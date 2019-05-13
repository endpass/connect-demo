import React, { Fragment } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { List, ListItemText, ListItem } from "@material-ui/core";
import styles from '../styles'

const OauthForm = ({ classes, accounts, onSignOut, onBack }) => {
  return (
    <List>
      <ListItem>
        <Button
          onClick={onBack}
        >
          Back to login
        </Button>
      </ListItem>
      <ListItem>
        <List>
          {accounts.map((account) => {
            return (
              <ListItem key={account}>
                <ListItemText primary={account}/>
              </ListItem>
            );
          })}
        </List>
      </ListItem>
      <ListItem>
        <Button
          className={classes.row}
          variant="contained"
          color="secondary"
          onClick={onSignOut}
        >
          Sign out from Endpass
        </Button>
      </ListItem>
    </List>
  )
};

export default withStyles(styles)(OauthForm)
