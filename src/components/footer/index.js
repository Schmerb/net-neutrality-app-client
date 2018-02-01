// // // // // // // // // //
//
//      Footer
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect }          from 'react-redux';
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
        const path    = this.props.location.pathname;
        let thinkLogo = null,
            aboutLink = null,
            small     = this.props.width < 900,
            landing   = path === '/', 
            map       = path === '/map',
            about     = path === '/about-project',
            sources   = path.includes('sources');
        if(map || (sources && small) || (landing && small) || (about && small)) {
            thinkLogo = <ThinkLogo path={path}/>;
        }
        if(map || sources) {
            aboutLink = <Link className="about-proj-link" to="/about-project" target="_blank">About This Project</Link>;
        }
        let classes = `${landing?'landing':''} ${sources?'sources':''}`;
        return (
            <footer role="contentinfo" className={classes}>
                {thinkLogo}
                {aboutLink}
            </footer>
        );
    }
}


const mapStateToProps = state => ({
    width: state.display.width
});

export default withRouter(connect(mapStateToProps)(Footer));