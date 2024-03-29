import React from 'react';
import { firebase, firebaseArticles, firebaseLooper } from '../../../firebase'

import SliderTemplate from './slider_template';

class NewsSlider extends React.Component {

state = {
  news: []
}

componentWillMount(){
  firebaseArticles.limitToFirst(3).once('value')
  .then((snapshot)=>{
    const news = firebaseLooper(snapshot)

    // news.forEach((item,i)=>{
    //   firebase.storage().ref('images')
    //   .child(item.image).getDownloadURL()
    //   .then( url=>{
    //     news[i].image = url;
    //     this.setState({
    //       news
    //     })
    //   })
    // })
    const asyncFunction = (item,i,cb) => {
      firebase.storage().ref('images')
       .child(item.image).getDownloadURL()
       .then( url=>{
         news[i].image = url;
         cb()
       })
    }

    //let request = []
    let requests = news.map((item,i) =>{
      return new Promise((resolve)=>{
        asyncFunction(item,i, resolve)
      })
    })
    Promise.all(requests).then(()=>{
      this.setState({
        news
      })
    })

  })



  // axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
  // .then(response => {
  //   this.setState({
  //     news:response.data
  //   })
  // })
}

  render () {
    return (
      <SliderTemplate data={this.state.news} type={this.props.type} settings={this.props.settings}/>
    )
  }
}

export default NewsSlider;
