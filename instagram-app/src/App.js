import React from "react";
import dummyData from "./dummy-data";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <PostContainer />
      <PostContainer />
      <PostContainer />
    </div>
  );
}

export default App;
