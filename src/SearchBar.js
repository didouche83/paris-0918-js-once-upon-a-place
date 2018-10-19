import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Autocompletion from "./Autocompletion";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import axios from "axios";

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
    height: 45,
    backgroundColor: "white"
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
    height: "100%",
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
    elWidth: 0,
    titlesList: []
  };

  static contextTypes = {
		router: PropTypes.object
	}

	redirectToTarget = () => {
		this.context.router.history.push(`/Results`)
	  }

  autoComp = iValue => {
    const url = `https://data.sfgov.org/resource/wwmu-gmzc.json?$where=title like '%25${iValue}%25'`; //&$limit=50
    axios.get(url).then(json => {
      const titleList = json.data
        .map(iFilm => iFilm.title)
        .sort()
        .filter((iTitle, iIndex, iTitles) => iTitle !== iTitles[iIndex - 1]);
      this.setState({
        searchValue: iValue,
        titlesList: iValue.length ? titleList : []
      });
    });
  };

  componentDidMount = () => {
    const { inputValue } = this.props;
    this.autoComp(inputValue);
  };

  handleChange = event => {
    this.setState(
      {
        inputValue: event.target.value
      },
      () => {
        const { inputValue } = this.state;
        const blnOpen = inputValue !== "";
        this.autoComp(inputValue);
        this.setState({
          open: blnOpen,
          anchorEl: document.getElementById("AppBarSearchIcon"),
          elWidth: document.getElementById("AppBarInputBase").clientWidth,
          inputValue: inputValue
        });
      }
    );
  };

  launchSearchLoc = iValue => {
    this.props.searchLoc(iValue);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.props.blnHome) {
      this.launchSearchLoc(this.state.inputValue);
    }
    this.props.lift(this.state.inputValue);
    this.setState({
      open: false
    });
    this.redirectToTarget();
  }

  handleSelect = iSearchStr => {
    if (!this.props.blnHome) {
      this.launchSearchLoc(iSearchStr);
    }
    this.props.lift(iSearchStr);
    this.setState({
      inputValue: iSearchStr,
      open: false
    });
    this.redirectToTarget();
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
    const { inputValue, open, anchorEl, elWidth, titlesList } = this.state;

    return (
      <form className="SearchBar" onSubmit={this.handleSubmit} autoComplete='off'>
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
            value={inputValue}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          {this.state.open && (
            <Autocompletion
              open={open}
              anchorEl={anchorEl}
              elWidth={elWidth}
              titlesList={titlesList}
              inputValue={inputValue}
              select={this.handleSelect}
            />
          )}
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default withStyles(styles)(SearchBar);
