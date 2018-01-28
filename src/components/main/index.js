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
        return(
            <main role="main" >
                <div className="container">
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/map" component={StatesMap}/>
                    <Route path="/sources" component={SourcesPage}/>
                </div> 
            </main>
        );
    }
}

const mapStateToProps = state => ({
    hasTouch: state.display.hasTouch,
    width: state.display.width,
    height: state.display.height
});

export default withRouter(connect(mapStateToProps)(Main));