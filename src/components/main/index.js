// // // // // // // // // //
//
//   MAIN
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

import { ROUTE_SLUG } from 'config';

import LandingPage from './landing';
import StatesMap from './states-map';
import SourcesPage from './sources-page';
import AboutProjectPage from './about-project-page';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main role="main">
        <div className="container">
          <Route exact path={`${ROUTE_SLUG}/`} component={LandingPage} />
          <Route exact path={`${ROUTE_SLUG}/map`} component={StatesMap} />
          <Route path={`${ROUTE_SLUG}/sources`} component={SourcesPage} />
          {!this.props.loading ? (
            <Route
              path={`${ROUTE_SLUG}/about-project`}
              component={AboutProjectPage}
            />
          ) : null}
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  hasTouch: state.display.hasTouch,
  width: state.display.width,
  height: state.display.height,
  loading: state.display.loading
});

export default withRouter(connect(mapStateToProps)(Main));
