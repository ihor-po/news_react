import React, { Component } from 'react';
import InputComponent from './input/inputComponent';
import ButtonComponent from './button/buttonComponent';
import TextareaComponent from './textarea/textareaComponent';
import './formCreate.css';
import CheckboxComponent from './checkbox/checkboxComponent';

class FormComponent extends Component {
  state = {
    title: '',
    newsText: '',
    buttonState: false
  }
  getTitleData = (_title) => {
    this.setState({title: _title});
  }
  getNewsTextData = (_newsTextData) => {
    this.setState({newsText: _newsTextData});
  }

  validateData = () => {
    const {title, newsText} = this.state;
    this.setState({buttonState: (title.trim() && newsText.trim()) ? true : false});
  }

  

  render() {
    const {buttonState} = this.state;
    return (
      <form className="createNews" id="createNews">
        <InputComponent title="Заголовок" fieldName="title" getTitleData={this.getTitleData}/>
        <TextareaComponent title="Текст новости" fieldName="newsText" getNewsTextData={this.getNewsTextData}/>
        <CheckboxComponent />
        <ButtonComponent disabled={buttonState}/>
      </form>
    );
  }
}

export default FormComponent;