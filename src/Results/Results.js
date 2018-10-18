import React, { Component } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import ResultList from "./ResultList";
import SimpleMap from "./Map";
import HeaderResults from "./HeaderResults";
import "./Results.css";

class Results extends Component {
  state = {
    locationsList: [],
    isLoaded: false,
    value: 0
  };

  searchLoc = async iValue => {
    const api_call = await fetch(
      `https://data.sfgov.org/resource/wwmu-gmzc.json?$where=title like '%25${iValue}%25'&$limit=50`
    );
    const data = await api_call.json();
    data.sort((data1, data2) => (data1.title < data2.title ? -1 : 1));
    this.setState({
      locationsList: api_call.ok ? data : [],
      isLoaded: true
    });
  };

  componentDidMount() {
    this.searchLoc(this.props.inputValue);
  }

  componentDidUpdate() {
    this.searchLoc(this.props.inputValue);
  }

  handleChange = (_, iValue) => {
    this.setState({ value: iValue });
  };

  // liftInputValue = (iValue) => {
  //   this.setState({
  //     inputValue: iValue
  //   })
  // }

  render() {
    const { value, locationsList, isLoaded } = this.state;
    const { inputValue } = this.props;
    if (isLoaded) {
      if (locationsList.length > 0) {
        return (
          <div className="Results">
            <div className="resHeader">
              <HeaderResults
                inputValue = {inputValue}
                searchLoc={this.searchLoc}
                lift={this.props.lift}
                // updateResults = {this.updateResults}
              />
            </div>

            <div className="resContent">
              <div className="mobileOnly">
                <div>
                  <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} centered>
                      <Tab label="List" />
                      <Tab label="Map" />
                    </Tabs>
                  </AppBar>
                  {value === 0 && <ResultList locationsList={locationsList} />}
                  {value === 1 && <SimpleMap />}
                </div>
              </div>
              <div className="desktopOnly">
                <ResultList locationsList={locationsList} />
                <SimpleMap />
              </div>
            </div>
          </div>
        );
      } else {
        return <h2>Sorry! Nothing was found!</h2>;
      }
    } else {
      return <h2 className="loading">Loading...</h2>;
    }
  }
}

export default Results;
