import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';
import CommentSubmit from './CommentSubmit';

class CommentSectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }
  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.get(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.id))
      });
    } else {
      this.currentComments();
    }
  }

  componentWillUnmount() {
    this.currentComments();
  }

  currentComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  handleCommentChange = event => {
    event.preventDefault();
    this.setState({
      comment: event.target.value
    });
  };

  handleCommentSubmit = event => {
    event.preventDefault();
    const newComment = { text: this.state.comment, username: 'melissamurphy' };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({
      comments,
      comment: ''
    });
    setTimeout(() => {
      this.setComments();
    }, 500);
  };

  render() {
    return (
      <>
        {this.props.comments.map((comment, index) => (
          <Comments key={index} comment={comment} />
        ))}
        <CommentSubmit
          comment={this.state.comment}
          handleCommentSubmit={this.handleCommentSubmit}
          handleCommentChange={this.handleCommentChange}
        />
      </>
    );
  }
}

CommentSectionContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSectionContainer;


// // <CardFooter>
// // {/* -------------------form start */}
// // <Form onSubmit={this.addNewComment}>
// //   <InputGroup>
// //     <Input
// //       type="text"
// //       name="text"
// //       placeholder="Add a comment..."
// //       value={this.state.userInput}
// //       onChange={this.handleChange}
// //     />
// //     <InputGroupAddon
// //       onClick={this.addNewComment}
// //       className="pl-3 my-auto"
// //       addonType="append"
// //     >
// //       <IconContext.Provider value={{ size: '1.4rem' }}>
// //         <FiMoreHorizontal />
// //       </IconContext.Provider>
// //     </InputGroupAddon>
// //   </InputGroup>
// // </Form>
// // {/* ------------------form end */}
// // </CardFooter>
