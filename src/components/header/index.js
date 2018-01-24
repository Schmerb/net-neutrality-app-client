// // // // // // // // // //
//
//      Header
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';

// import TopNav from './top-nav';
import ThinkLogo from './think-logo';
import Logo from './logo';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const classes = this.props.location.pathname.includes('sources') ? 'sources-header' : '';
        return(
            <header role="banner" className={`header ${classes}`}>
                <Logo />
                <ThinkLogo />
            </header>
        );
    }
}


const mapStateToProps = state => ({
});

export default withRouter(connect(mapStateToProps)(Header));