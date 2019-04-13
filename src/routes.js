import React from 'react'
// import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import NewsArticles from './components/Articles/News/Post/index';
import VideoArticles from './components/Articles/Videos/Video/index';



class Routes extends React.Component {
  render () {
    return(
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/articles/:id" exact component={NewsArticles}/>
          <Route path="/videos/:id" exact component={VideoArticles}/>
        </Switch>
      </Layout>

    )
  }
}

export default Routes;
