// // // // // // // // // //
//
//   MAIN
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

import LandingPage from './landing';
import StatesMap   from './states-map';
import SourcesPage from './sources-page';


export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let classes = this.props.location.pathname.includes('map') ? 'map':'';
        return(
            <main role="main" >
                <div className={`container ${classes}`}>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/map" component={StatesMap}/>
                    <Route path="/sources" component={SourcesPage}/>
                </div> 
            </main>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    hasTouch: state.display.hasTouch,
    width: state.display.width,
    height: state.display.height
});

export default withRouter(connect(mapStateToProps)(Main));