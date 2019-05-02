<CardHeader>
                <Row>
                  <Col xs="2">
                    <img
                      className=""
                      src={this.props.post.thumbnailUrl}
                      alt={this.props.post.username}
                    />
                  </Col>
                  <Col xs="10" className="">
                    <strong>{this.props.post.username}</strong>
                  </Col>
                </Row>
              </CardHeader>