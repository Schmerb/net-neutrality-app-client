// // // // // // // // // // // // 
//
//	App
//
// // // // // // // // // // // // 

import React, { Component } from 'react';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { Cookies }    from 'react-cookie';

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
    // Fires when component is about to mount
    // * * * * * * * * * * * * * * * * * * * *
    componentWillMount() {
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
        const classes = this.props.location.pathname.includes('sources') ? 'sources' : '';

        return(
            <section className={`app ${classes}`}>
                {flashMsg}
                <Header />
                <Main />
                <Footer />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    flashMsg: state.display.flashMsg
});

export default withRouter(connect(mapStateToProps)(App));
