// // // // // // // // // //
//
//   MAIN
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StatesMap from './states-map';


export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

   

    render() {
        return(
            <main role="main" >
                <div className={`container`}>
                {/* <img src="/assets/test.png" alt=""/> */}
                    <StatesMap />
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