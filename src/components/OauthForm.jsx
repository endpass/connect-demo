import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import styles from '../styles';

const OauthForm = ({ classes, accounts, onSignOut, onBack }) => (
  <List>
    {accounts.map(account => (
      <ListItem key={account} data-test="oauth-form-accounts-item">
        <Typography variant="body1" className={classes.ellipsis}>
          {account}
        </Typography>
      </ListItem>
    ))}
    <ListItem>
      <Button
        className={classes.row}
        variant="contained"
        color="secondary"
        onClick={onSignOut}
        data-test="oauth-form-close-button"
      >
        Close
      </Button>
    </ListItem>
  </List>
);

export default withStyles(styles)(OauthForm);
