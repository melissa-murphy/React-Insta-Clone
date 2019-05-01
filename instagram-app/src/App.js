import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import dummyData from './dummy-data.js';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';
// import CommentSection from './Components/CommentSection/CommentSection';

class App extends React.Component {
  state = {
    userPosts: [],
    userInput: ''
  };

  componentDidMount() {
    this.setState({
      userPosts: dummyData,
      userInput: ''
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="container">
          {this.state.userPosts.map((post, index) => (
            <PostContainer key={index} post={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
