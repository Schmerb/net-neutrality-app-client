// // // // // // // // // //
//
//       Top Nav
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dim from 'components/services/dim';

// import Burger     from './burger';
import TopNavMenu from './top-nav-menu';



export class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        let dim = this.props.open ? <Dim /> : null;
        return (
                <nav className="top-nav">
                    {/* <Burger /> */}
                    {dim}
                    <TopNavMenu/>
                </nav>
        );
    }
}

const mapStateToProps = state => ({});


export default connect(mapStateToProps)(TopNav);