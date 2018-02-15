import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Child from "./components/TestDiv";
import Map from "./components/map";

const center = { lat: 59.95, lng: 30.33 };

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      call: [],
    };
  }

  componentDidMount() {
    //this.ApiCall();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.call}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Child />
        <div className="map-container">
          <Map center={center} zoom={11} />
        </div>
      </div>
    );
  }

  ApiCall() {
    return axios
      .get("/API")
      .then(res => {
        const title = res.data.title;
        this.setState({ call: title });
      })
      .catch(err => {
        console.log(err);
        throw new Error(err);
      });
  }
}
