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

    componentDidMount() {
        document.body.classList.add('landing');
    }

    componentWillUnmount() {
        document.body.classList.remove('landing');
    }

    render() {
        
        return(
            <section className="landing-page">
                <div className="text-wrap">
                    <div className="inner-wrap">
                        <h2 className="landing-title">Net Neutrality and the 2018 Elections</h2>
                        <p className="overview">In December, the Federal Communications Commission (FCC) <Link to="https://www.nytimes.com/2017/12/14/technology/net-neutrality-repeal-vote.html" target="_blank">inexplicably</Link> put the interests of large telecoms over those of the public when it decided to repeal <Link to="https://www.npr.org/sections/thetwo-way/2015/02/26/389259382/net-neutrality-up-for-vote-today-by-fcc-board" target="_blank">The Open Internet Order</Link>. Help us stand up to Ajit Pai and elect representatives that will permanently reinstate net neutrality protections and ensure a free and open internet for all. </p>
                    </div>
                </div>
                <div className="landing-map-wrap">
                    <Link className="get-started-btn" to="/map">GET STARTED</Link>
                    <USAMap defaultFill={"transparent"} 
                            title={"Map of the United States of America"}/>
                            
                </div>
            </section>
        );
    }
}


const mapStateToProps = state => ({
    hasTouch: state.display.hasTouch,
    width: state.display.width,
    height: state.display.height
});

export default connect(mapStateToProps)(LandingPage);