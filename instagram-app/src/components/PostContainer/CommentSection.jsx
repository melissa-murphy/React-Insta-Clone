componentDidMount() {
    this.setState({
      likes: this.props.post.likes
    });
  }

  addNewComment = event => {
    event.preventDefault();

    console.log(
      this.state.userInput + this.props.index + '---------------User Input'
    );

    this.setState({
      comments: this.state.comments + this.state.userInput
    });
  };
  handleChange = event => {
    event.preventDefault();
    this.setState({
      userInput: event.target.value
    });
  };

  <CardFooter>
  {/* -------------------form start */}
  <Form onSubmit={this.addNewComment}>
    <InputGroup>
      <Input
        type="text"
        name="text"
        placeholder="Add a comment..."
        value={this.state.userInput}
        onChange={this.handleChange}
      />
      <InputGroupAddon
        onClick={this.addNewComment}
        className="pl-3 my-auto"
        addonType="append"
      >
        <IconContext.Provider value={{ size: '1.4rem' }}>
          <FiMoreHorizontal />
        </IconContext.Provider>
      </InputGroupAddon>
    </InputGroup>
  </Form>
  {/* ------------------form end */}
</CardFooter>