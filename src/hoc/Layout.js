import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import FooterContainer from '../components/footer/FooterContainer';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        {this.props.children}
        <FooterContainer />
      </Fragment>
    );
  }
}
export default withRouter(Layout);
