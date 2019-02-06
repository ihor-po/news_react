import React, { Component } from 'react';

class CommentsComponent extends Component {
  constructor(props) {
    super(props);
    this.comments = this.props.comments;
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({comments: ++this.comments});
    }  
  render() {
    return (
      <div className="comments" onClick={this.handleClick}>
        Коментариев {this.comments}
      </div>
    );
  }
}

export default CommentsComponent;