const styles = theme => ({
  loader: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  appWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    marginBottom: theme.spacing(1.5),
    width: '100%',
  },
  field: {
    display: 'flex',
    width: '100%',
    marginRight: 0,
    marginLeft: 0,
    marginBottom: theme.spacing(1.5),
  },
  card: {
    padding: theme.spacing(2),
    maxWidth: 480,
    margin: `${theme.spacing.unit}px auto`,
  },
  fluid: {
    width: '100%',
  },
  inlineButton: {
    flex: '1 1 auto',
    marginLeft: theme.spacing.unit,
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  tabsPanel: {
    display: 'flex',
    justifyContent: 'center',
  },
  contentWrapper: {
    marginTop: theme.spacing(2),
  },
});

export default styles;
