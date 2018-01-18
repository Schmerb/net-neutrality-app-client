// // // // // // // // // //
//
//       Top Nav Links
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


export class TopNavLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
            </div>
        );
    }
}


const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        loggedIn: state.auth.currentUser !== null,
        username: currentUser ? state.auth.currentUser.username : ''
    };
};

export default withRouter(connect(mapStateToProps)(TopNavLinks));