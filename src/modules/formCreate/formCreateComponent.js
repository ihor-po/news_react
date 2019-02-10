import React, { Component } from 'react';
import InputComponent from './input/inputComponent';
import ButtonComponent from './button/buttonComponent';
import TextareaComponent from './textarea/textareaComponent';
import './formCreate.css';
import CheckboxComponent from './checkbox/checkboxComponent';

class FormComponent extends Component {
  
  constructor(props) {
    super(props);
    this.title = '';
    this.newsText = '';
    this.agree = false;
  }

  state = {
    title: '',
    buttonState: false
  }
  
  /**
   * Get data from fields
   * @property fieldName - name of the field
   * @property data - data from field
   */
  getUserData = (fieldName, data) => {
    switch(fieldName) {
      case 'title':
        this.title = data;
        break;
      case 'newsText':
        this.newsText = data;
        break;
      case 'agreeCbx':
        this.agree = data;
        break;  
      default:
        break;  
    }
    this.validateData();
  }
  validateData = () => {
    let {title, newsText, agree} = this;
    this.setState({buttonState: (title.trim() && newsText.trim() && agree) ? true : false});
  }
  showNews = (e) => {
    e.preventDefault();
    let _news = this.props.news;
    let last = _news[_news.length - 1];
    let newNews = {
      id: last.id + 1,
      title: this.title,
      newsText: this.newsText,
      previewText: this.newsText.substr(0, 60) + '...'
    }
    _news[last.id + 1] = newNews;
    this.props.updateNews(_news);

    //alert(this.title + '/r/n' + this.newsText);
  }

  

  render() {
    const {buttonState} = this.state;
    return (
      <form className="createNews" id="createNews">
        <InputComponent title="Заголовок" fieldName="title" getTitleData={this.getUserData}/>
        <TextareaComponent title="Текст новости" fieldName="newsText" getNewsTextData={this.getUserData}/>
        <CheckboxComponent fieldName="agreeCbx" getUserAgree={this.getUserData}/>
        <ButtonComponent disabled={buttonState} onClick={this.showNews}/>
      </form>
    );
  }
}

export default FormComponent;