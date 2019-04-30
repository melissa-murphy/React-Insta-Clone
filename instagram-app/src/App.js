import React from "react";
import "./App.css";
import { Container } from "reactstrap";

import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }
  componentDidMount() {
    fetch("./dummy-data.js")
      .then(res => res.json)
      .then(entries => this.setState({ dummyData: entries }));
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Container dummyData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
