import React from "react";
import "./App.css";

import PostItems from "./components/PostContainer/PostItems";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import CommentSection from "./components/CommentSection/CommentSection";

import dummyData from "./dummy-data";

class App extends React.Component {
  state = {
    dummyData: []
  };
  componentDidMount() {
    console.log("App: CDM running");
    this.setState({
      dummyData: dummyData
    });
  }

  render() {
    console.log("App rendering");
    return (
      <div className="App">
        <SearchBar />
        <PostItems dummyData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
