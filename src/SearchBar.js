import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Autocompletion from "./Autocompletion";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const styles = theme => ({
  search: {
    position: "relative",
    borderRadius: "4px 4px 1px 1px",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    },
    border: "solid",
    borderColor: "lightgrey",
    borderWidth: theme.spacing.unit * 0.1,
    boxShadow: "0px 2px 3px #aaa",
    "&:hover": {
      boxShadow: "0px 0px 0px #aaa"
    },
    height: 45
  },
  searchIcon: {
    color: "black",
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "black",
    width: "100%",
    height: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: 200,
      "&:focus": {
        width: 300
      }
    }
  }
});

class SearchBar extends Component {
  state = {
    inputValue: this.props.inputValue,
    open: false,
    anchorEl: null,
    elWidth: 0
  };

  handleChangeAndFocus = event => {
    this.state.inputValue !== event.target.value &&
      this.setState(
        {
          inputValue: event.target.value
        },
        () => {
          const { inputValue } = this.state;
          const blnOpen = inputValue !== "";
          this.setState({
            open: blnOpen,
            anchorEl: document.getElementById("AppBarSearchIcon"),
            elWidth: document.getElementById("AppBarInputBase").clientWidth,
            inputValue: inputValue
          });
        }
      );
  };

  handleKeyUp = e => {
    e.keyCode === 13 && this.launchSearchLoc(this.state.inputValue);
  };

  handleSelect = iSearchStr => {
    this.setState({
      inputValue: iSearchStr,
      open: false
    });
    this.launchSearchLoc(iSearchStr);
  };

  launchSearchLoc = iValue => {
    this.props.searchLoc(iValue);
  };

  handleBlur = event => {
    if (
      event.relatedTarget != null &&
      event.relatedTarget.classList.contains("AutocompletionItem")
    ) {
      this.handleSelect(event.relatedTarget.innerText);
    }
    this.setState({
      open: false
    });
  };

  render() {
    const { classes } = this.props;
    const { inputValue, open, anchorEl, elWidth } = this.state;

    return (
      <div className="SearchBar">
        <div className={classes.search}>
          <div className={classes.searchIcon} id="AppBarSearchIcon">
            <Search />
          </div>
          <InputBase
            id="AppBarInputBase"
            placeholder="Movie/Address..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            onKeyUp={this.handleKeyUp}
            value={inputValue}
            onChange={this.handleChangeAndFocus}
            onFocus={this.handleChangeAndFocus}
            onBlur={this.handleBlur}
          />
          {this.state.open && (
            <Autocompletion
              open={open}
              anchorEl={anchorEl}
              elWidth={elWidth}
              inputValue={inputValue}
              select={this.handleSelect}
            />
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SearchBar);
