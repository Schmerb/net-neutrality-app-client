// // // // // // // // // // // // 
//
//	App
//
// // // // // // // // // // // // 

import React, { Component } from 'react';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { Cookies }    from 'react-cookie';

import { refreshAuthToken } from 'actions/auth';
import { setWidth } from 'actions/display';

import FlashMessage from './services/flash-message';

import Header from './header/';
import Main   from './main/';
import Footer from './footer/';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // * * * * * * * * * * * * * * * * * * * *
    // 
    // * * * * * * * * * * * * * * * * * * * *
    componentDidMount() {
        if(this.props.hasAuthToken) {
            // Try to get a fresh auth token if we had an existing one in
            // localStorage
            this.props.dispatch(refreshAuthToken());
        }
    };

    // * * * * * * * * * * * * * * * * * * * *
    // 
    // * * * * * * * * * * * * * * * * * * * *
    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    };

    // * * * * * * * * * * * * * * * * * * * *
    // Fires when component is about to mount
    // * * * * * * * * * * * * * * * * * * * *
    componentWillMount() {
        this.stopPeriodicRefresh();
        window.addEventListener('resize', this.handleWindowResize);
    };

    // * * * * * * * * * * * * * * * * * * * *
    // Fires when component is about to 
    // unmount
    // * * * * * * * * * * * * * * * * * * * *
    componentWillUnount() {
        window.removeEventListener('resize', this.handleWindowResize);
    };

    // * * * * * * * * * * * * * * * * * * * *
    // Fires on window resize event
    // * * * * * * * * * * * * * * * * * * * *
    handleWindowResize = () => {
        this.props.dispatch(setWidth(window.innerWidth));
    };


    // * * * * * * * * * * * * * * * * * * * *
    // starts timer and refreshes JWT token
    // every hour
    // * * * * * * * * * * * * * * * * * * * *
    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // one hour
        );
    };

    // * * * * * * * * * * * * * * * * * * * *
    // stops timer if it is currently running
    // * * * * * * * * * * * * * * * * * * * *
    stopPeriodicRefresh() {
        if(!this.refreshInterval) {
            return;
        }
        clearInterval(this.refreshInterval);
    };

    // * * * * * * * * * * * * * * * * * * * *
    // 
    // * * * * * * * * * * * * * * * * * * * *
    watchWindowWidth = () => {
       
    }

    // * * * * * * * * * * * * * * * * * * * *
    // checks for confirmation and flash
    // messages and returns them
    // * * * * * * * * * * * * * * * * * * * *
    getMessages() {
        let flashMsg   = null;
        if(this.props.flashMsg) {
            flashMsg = <FlashMessage delay={200} msg={this.props.flashMsg}/>;
        }
        return { flashMsg };
    }

    // // // // // // // // // //
    //
    //      Render
    //
    // // // // // // // // // //
    render () {
        const { flashMsg } = this.getMessages();

        return(
            <section className="app">
                {flashMsg}
                <Header />
                <Main />
                <Footer />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null,
    justLoggedOut: state.auth.justLoggedOut,
    flashMsg: state.display.flashMsg
});

export default withRouter(connect(mapStateToProps)(App));
