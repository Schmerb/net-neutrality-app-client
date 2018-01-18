// // // // // // // // // //
//
//      Header
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';

import TopNav from './top-nav';
import Logo   from './logo';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return(
            <header role="banner" className="header">
                <Logo />
                <TopNav />
            </header>
        );
    }
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(Header));