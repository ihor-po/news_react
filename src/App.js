import React, { Component } from 'react';
// import logo from './logo.svg';
import './asset/iconfont/material-icons.css';
import NewsComponent from './modules/news/newsComponent';
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/textfield/dist/mdc.textfield.css";
import FormComponent from './modules/formCreate/formCreateComponent';

class App extends Component {
  state = {
    news: [
      {
        id: 1, 
        title: 'News about 1', 
        newsText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        previewText: 'News NEws about about 1 1' 
      },
      {
        id: 2, 
        title: 'News about 2', 
        newsText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        previewText: 'News NEws about about 2 2' 
      },
      {
        id: 3, 
        title: 'News about 3', 
        newsText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        previewText: 'News NEws about about 3 3' 
      },
      {
        id: 4, 
        title: 'News about 4', 
        newsText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        previewText: 'News NEws about about 4 4' 
      },
      {
        id: 5, 
        title: 'News about 5', 
        newsText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        previewText: 'News NEws about about 4 4' 
      },
    ]
  }

  updateNews = (data) => {
    this.setState({news: data});
  }

  render() {
    const {news} = this.state;
    return (
      <div className="App">
      <FormComponent news={news} updateNews={this.updateNews}/>
      <h2>Fresh News</h2>
        <NewsComponent data={news}/>
      </div>
      
    );
  }
}

export default App;
