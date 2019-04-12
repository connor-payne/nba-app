import React from 'react';
import axios from 'axios';
import { URL } from '../../../config';

import SliderTemplate from './slider_template';

class NewsSlider extends React.Component {

state = {
  news: []
}

componentWillMount(){
  axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
  .then(response => {
    this.setState({
      news:response.data
    })
  })
}

  render () {
    return (
      <SliderTemplate data={this.state.news} type={this.props.type} settings={this.props.settings}/>
    )
  }
}

export default NewsSlider;
