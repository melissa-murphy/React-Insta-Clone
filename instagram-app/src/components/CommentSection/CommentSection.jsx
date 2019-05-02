import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

class CommentSection extends Component {
  render() {
    return (
      <>
        <Row>
          {this.props.comments.map((comment, index) => (
            <Col
              xs="12"
              key={index}
              comment={comment}
              className="comment text-left"
            >
              <p>
                <strong>{comment.username}</strong> {comment.text}
              </p>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

CommentSection.defaultProps = {
  commentSection: []
};

export default CommentSection;



// componentDidMount() {
//   this.setState({
//     likes: this.props.post.likes
//   });
// }

// addNewComment = event => {
//   event.preventDefault();

//   console.log(
//     this.state.userInput + this.props.index + '---------------User Input'
//   );

//   this.setState({
//     comments: this.state.comments + this.state.userInput
//   });
// };
// handleChange = event => {
//   event.preventDefault();
//   this.setState({
//     userInput: event.target.value
//   });
// };

// componentDidMount() {
//   this.setState({
//     likes: this.props.post.likes
//   });
// }

// addNewComment = event => {
//   event.preventDefault();

//   console.log(
//     this.state.userInput + this.props.index + '---------------User Input'
//   );

//   this.setState({
//     comments: this.state.comments + this.state.userInput
//   });
// };
// handleChange = event => {
//   event.preventDefault();
//   this.setState({
//     userInput: event.target.value
//   });
// };

// <CardFooter>
// {/* -------------------form start */}
// <Form onSubmit={this.addNewComment}>
//   <InputGroup>
//     <Input
//       type="text"
//       name="text"
//       placeholder="Add a comment..."
//       value={this.state.userInput}
//       onChange={this.handleChange}
//     />
//     <InputGroupAddon
//       onClick={this.addNewComment}
//       className="pl-3 my-auto"
//       addonType="append"
//     >
//       <IconContext.Provider value={{ size: '1.4rem' }}>
//         <FiMoreHorizontal />
//       </IconContext.Provider>
//     </InputGroupAddon>
//   </InputGroup>
// </Form>
// {/* ------------------form end */}
// </CardFooter>