// // // // // // // // // //
//
//       Logo
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { ROUTE_SLUG } from 'config';

import SiteLogo from 'icons/site-logo';

import { resetState } from 'actions/map';

export class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = e => {
    e.preventDefault();
    this.props.dispatch(resetState());
    this.props.history.push({
      pathname: ROUTE_SLUG + '/map/'
    });
  };

  render() {
    return (
      <div className="logo">
        <Link to={`${ROUTE_SLUG}/`} onClick={this.handleClick}>
          <span className="aria-hidden" aria-hidden="false">
            Navigate Home
          </span>
          <SiteLogo className="monitor-icon" />
        </Link>
        <h1 className="motto">TAKE BACK THE NET</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentState: state.map.currentState
});

export default withRouter(connect(mapStateToProps)(Logo));
