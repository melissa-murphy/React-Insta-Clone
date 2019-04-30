import React from "react";
import "./App.css";
import PostContainer from "./components/PostContainer/PostContainer";
import CommentSection from "./components/CommentSection/CommentSection";

import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.Component {
  state = {
    dummyData: []
  };
  componentDidMount() {
    fetch("./dummy-data.js")
      .then(res => res.json)
      .then(entries => this.setState({ dummyData: entries }))
      .catch(err => console.log("noooo"));
  }

  render() {
    console.log("App rendering");
    return (
      <div className="App">
        <SearchBar />
        <PostContainer entries={this.state.dummyData}>
          <CommentSection />
        </PostContainer>
      </div>
    );
  }
}

export default App;
