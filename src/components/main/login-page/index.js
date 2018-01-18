// // // // // // // // // //
//
//       Login Page
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';
import Spinner from 'react-spinkit';

import LoginForm from './login-form';



export class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }
    
    // * * * * * * * * * * * * * * * * * 
    // Fires when state variable in 
    // props is updated
    // * * * * * * * * * * * * * * * * *
    componentWillReceiveProps(nextProps) {
    }

    // * * * * * * * * * * * * * * * * * 
    // Lets state know when background 
    // image is loaded
    // * * * * * * * * * * * * * * * * *
    imgLoad = e => {
        this.setState({
            loaded: true
        });
    }

    render() {
        if(this.state.loaded) {
            return  (
                <div className="login">
                    <h3>Login</h3>
                    <ul>
                        <li>username: <b>demo</b></li>
                        <li>password: <b>demopassword</b></li>
                    </ul>
                    <LoginForm />
                </div>
            );
        }
        return(
            <div className="loading-container">
                <img src="/assets/images/" alt="" onLoad={this.imgLoad}/>
                <Spinner className="spinner" name="circle" fadeIn="none" color="coral" />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(LoginPage));