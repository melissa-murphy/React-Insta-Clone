import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import dummyData from './dummy-data.js';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userPosts: dummyData
      // post: {
      //   username: '',
      //   thumbnailUrl: '',
      //   imageUrl: '',
      //   likes: '',
      //   timestamp: '',
      //   comments: {
      //     username: '',
      //     text: ''
      //   }

      // }
    };
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
