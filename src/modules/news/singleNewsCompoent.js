import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentsComponent from '../comments/commentsComponent'

class SingleNewsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({visible: true});
    }  

    render() {
    let _title = this.props.title;
    let _text = this.props.previewText;
    let _fullText = this.props.fullText;
    let _visible = this.state.visible;

    return (  
        <div className="news__singleNews">
          <h3 className="news__title"><i className="material-icons">fiber_new</i>{_title}</h3>
          <p className="news__text">{_text}</p>
          <p className={"news__full-text " + (_visible ? "" : "d-none")}>{_fullText}</p>
          <button 
            id="star-this-item"
            className={(_visible ? "d-none" : "mdc-icon-button mdc-icon-button--on")}
            aria-label="Unstar this item"
            aria-hidden="true"
            aria-pressed="true"
            onClick={this.handleClick}
          >
              <img src="" className="mdc-icon-button__icon" alt=""/><i className="material-icons">fingerprint</i>
          </button>
          <CommentsComponent comments={1}/>
        </div>
    );
  }
}

SingleNewsComponent.propTypes = {
  title: PropTypes.string,
  previewText: PropTypes.string,
  fullText: PropTypes.string
};

export default SingleNewsComponent;