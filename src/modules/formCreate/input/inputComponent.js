import React, { Component } from 'react';

class InputComponent extends Component {
  state = {
    title: this.props.title,
    fieldName: this.props.fieldName,
    value: '',
    input: React.createRef()
  }

  componentDidMount() {
    // ставим фокус в input
    // this.input.current.focus();
  }

  changeText = (e) => {
    this.props.getTitleData(this.state.fieldName, e.currentTarget.value);
    this.setState({value: e.currentTarget.value});
  }

  render() {
    const {input, fieldName} = this.state;
    if (this.input !== undefined) {
      
    }
    return (
        <div className="mdc-text-field">
          <input 
          type="text" 
          className="mdc-text-field__input" 
          id={fieldName} 
          name="newsTitle"
          ref={input}
          onChange={this.changeText}
          />
          <label htmlFor={this.fieldName} className="mdc-floating-label">{this.state.title}</label>
          <div className="mdc-line-ripple"></div>
        </div>
    );
  }
}

export default InputComponent;