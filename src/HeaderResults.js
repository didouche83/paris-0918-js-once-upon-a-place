import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import logo from './images/logo.svg';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
      primary: {
        light: '#fafafa',
        main: '#ffffff',
        dark: '#c7c7c7',
        contrastText: '#000000',
      },
  },
});

const styles = theme => ({
  root: {
    width: '100%',
  },
  logo: {
    width: theme.spacing.unit * 3,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 500,
    transition: theme.transitions.create('width')
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  }
});

class HeaderResults extends React.Component {

  render() {
    const { classes } = this.props;

    const renderMenu = (
      <Menu
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
      </Menu>
    );

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit">
                <img src={logo} className={classes.logo} alt="logo" />
              </IconButton>
              <TextField
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Movie / Address"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Toolbar>
          </AppBar>
          {renderMenu}
        </div>
      </MuiThemeProvider>
    );
  }
}

HeaderResults.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderResults);