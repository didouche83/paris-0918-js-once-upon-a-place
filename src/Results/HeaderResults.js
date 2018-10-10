import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../images/logoCamera.svg';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

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
    height:'10vh'
  },
  logo: {
    width: theme.spacing.unit * 4,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    //flexBasis: 500,
    // width: '200px',
    
    // transition:'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    // theme.transitions.create('width')
    // position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.grey, 0.15),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.common.grey, 0.25),
    // },
    // marginLeft: 0,
    // transition: theme.transitions.create('width'),
    // width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   width: 120,
    //   '&:focus': {
    //     width: 200,
    //   },
    // },
  },
  // inputA:{
  //   width: '10%'
  // }
});

class HeaderResults extends React.Component {

  constructor () {
    super()
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      value : this.props.inputValue
    })
  }

  onChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  render () {
    return <input
      type="text"
      value={this.state.value}
      onChange={this.onChange}
    />
  }

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
                value={this.state.value}
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Movie / Address"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" className={classes.inputA}>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={this.onChange}
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