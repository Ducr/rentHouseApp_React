import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import House from './pages/House';
import News from './pages/News';
import My from './pages/My';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route path='/' exact render={ () => <Layout><Home /></Layout> } />
          <Route path='/House' render={ () => <Layout><House /></Layout> } />
          <Route path='/News' render={ () => <Layout><News /></Layout> } />
          <Route path='/My' render={ () => <Layout><My /></Layout> } />
        </Router>
      </Fragment>
    )
  }
}

export default App;