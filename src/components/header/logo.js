// // // // // // // // // //
//
//       Logo
//
// // // // // // // // // //

import React from 'react';
import { Link } from 'react-router-dom';

import SiteLogo from 'icons/site-logo';

export default function Logo(props) {
    return (
        <div className="logo">
            <Link to="/">
                <span className="aria-hidden" aria-hidden="false">Navigate Home</span>
                <SiteLogo className="monitor-icon"/>
            </Link>
            <h1 className="motto">TAKE BACK THE NET</h1>
        </div>
    );   
}