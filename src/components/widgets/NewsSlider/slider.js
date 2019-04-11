import React from 'react';
import axios from 'axios';

import SliderTemplate from './slider_template';

class NewsSlider extends React.Component {

state = {
  news: []
}

componentWillMount(){
  axios.get(`http://localhost:3004/articles?_start=0&_end=3`)
  .then(response => {
    this.setState({
      news:response.data
    })
  })
}

  render () {
    console.log(this.state.news)
    return (
      <SliderTemplate data={this.state.news}/>
    )
  }
}

export default NewsSlider;
