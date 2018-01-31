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
        const path = this.props.location.pathname;
        let thinkLogo = null;
        if((path === '/map') || (path === '/' && this.props.width < 900)) {
            thinkLogo = <ThinkLogo path={path}/>;
        }
        let landing = path === '/' ? 'landing':'';
        return (
            <footer role="contentinfo" className={landing}>
                {thinkLogo}
                {path === '/about-project' ? null : <Link className="about-proj-link" to="/about-project">About This Project</Link>}
            </footer>
        );
    }
}


const mapStateToProps = state => ({
    width: state.display.width
});

export default withRouter(connect(mapStateToProps)(Footer));