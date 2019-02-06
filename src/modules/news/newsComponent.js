import React, { Component } from 'react';
import SingleNewsComponent from './singleNewsCompoent';
import './news.css';

class NewsComponent extends Component {

  render() {
    let data = this.props.data;
    let singleNews;

    if(data.length > 0){
      singleNews = data.map(function(_item, _index) {
        return (
          <SingleNewsComponent key={_index} title={_item['title']} previewText={_item['previewText']} 
          fullText={_item['newsText']} />
        )
      })
    } else {
      singleNews = <h5>На данный момент новостей нет!</h5>
    }

    return (
      <div>
        <h4 className={data.length > 0 ? '' : 'd-none'}>Общее колличество нововстей: {data.length}</h4>
        <div className="news">
        {singleNews}
        </div>
      </div>
    );
  }
}

export default NewsComponent;