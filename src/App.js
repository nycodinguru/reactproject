import React, { Component } from 'react';
import './styles/index.scss';
import { Switch, Route, withRouter } from 'react-router-dom';
import Layout from './hoc/Layout';
import LandingContainer from './components/LandingContainer';

class App extends Component {
  render() {
    let routes = (
      <Route>
          <Switch>
          <Route
              exact
              path="/"
              render={ props => <LandingContainer {...props} />}
            />
          </Switch>
      </Route>
      )

      return <Layout>{routes}</Layout>;
  }
}

export default withRouter(App);
