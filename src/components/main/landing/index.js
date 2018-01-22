// // // // // // // // // //
//
//   Landing
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import USAMap from 'react-usa-map';

export class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <section className="landing-page">
                <div className="text-wrap">
                    <h2>Introduction to the microsite sed do eiusmod tempor.</h2>
                    <p>The Federal Communications Commission (FCC) vote on December 14 on Net Neutrality casts a long shadow of doubt on the future of the internet in the United States. As a technologist with more than a decade of experience and now an educator at Thinkful, that same shadow looms over the future of my students.</p>
                </div>
                <div className="landing-map-wrap">
                    <Link className="get-started-btn" to="/map">GET STARTED</Link>
                    <USAMap width={this.props.width}
                            defaultFill={"transparent"} 
                            title={"Map of the United States of America"}/>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    hasTouch: state.display.hasTouch,
    width: state.display.width,
    height: state.display.height
});

export default connect(mapStateToProps)(LandingPage);