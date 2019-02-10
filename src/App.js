import React, { Component } from 'react';
// import logo from './logo.svg';
import './asset/iconfont/material-icons.css';
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/textfield/dist/mdc.textfield.css";
import newsData from './data/news';
import NewsComponent from './modules/news/newsComponent';
import FormComponent from './modules/formCreate/formCreateComponent';
import LoaderComponent from './modules/loader/LoaderComponent';

class App extends Component {
  
  state = {
    news: [],
    isLoading: true
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/test.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        // console.log(this);
        // console.log('приехали данные ', data);
        setTimeout(() => {
          this.setState({ isLoading: false, news: newsData });
        }, 3000)
      })
  }

  updateNews = (data) => {
    this.setState({news: data});
  }

  render() {
    const {isLoading, news} = this.state;
    return (
      // <React.Fragment>
      <div className="App">
      {isLoading && <LoaderComponent />}
      {!isLoading && 
      <React.Fragment>
        <FormComponent news={news} updateNews={this.updateNews}/>
      <h2>Fresh News</h2>
        <NewsComponent data={news}/>
        </React.Fragment>
      }
      </div>
      // </React.Fragment>
      
    );
  }
}

export default App;
