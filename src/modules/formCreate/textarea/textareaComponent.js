import React, { Component } from 'react';

class TextareaComponent extends Component {
  state = {
    title: this.props.title,
    fieldName: this.props.fieldName,
    value: '',
    textarea: React.createRef()
  }
  componentDidMount() {

  }

  changeText = (e) => {
      this.props.getNewsTextData(this.state.fieldName, e.currentTarget.value);
      this.setState({value: e.currentTarget.value});
  }

  render() {
    return (
        <div className="mdc-text-field mdc-text-field--textarea">
            <textarea 
            id="textarea" 
            className="mdc-text-field__input" 
            rows="3" cols="40"
            ref={this.state.textarea}
            onChange={this.changeText}
            >
            </textarea>
            <div className="mdc-notched-outline">
                <div className="mdc-notched-outline__leading"></div>
                <div className="mdc-notched-outline__notch">
                <label htmlFor="textarea" className="mdc-floating-label">Текст новости</label>
            </div>
            <div className="mdc-notched-outline__trailing"></div>
            </div>
        </div>
    );
  }
}

export default TextareaComponent;