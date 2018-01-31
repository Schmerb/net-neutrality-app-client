// // // // // // // // // //
//
//      Footer
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import ThinkLogo from './think-logo';

import { scrollIt } from 'utils/scroll';


export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    // * * * * * * * * * * * * * * * * * * * *
    // Scrolls to top of document
    // * * * * * * * * * * * * * * * * * * * *
    handleClick = () => scrollIt(0, 500, 'easeInOutCubic');

    render() {
        return (
            <footer role="contentinfo">
                {/* {this.props.width < 900 ? <ThinkLogo /> : null }  */}
                <ThinkLogo />
                <Link className="about-proj-link" to="/about-project">About This Project</Link>
            </footer>
        );
    }
}


const mapStateToProps = state => ({
    width: state.display.width
});

export default withRouter(connect(mapStateToProps)(Footer));