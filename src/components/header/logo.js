// // // // // // // // // //
//
//       Logo
//
// // // // // // // // // //

import React from 'react';
import { Link } from 'react-router-dom';

import Monitor from 'icons/monitor';
import SiteLogo    from 'icons/site-logo';

export default function Logo(props) {
    return (
        <div className="logo">
            <Link to="/">
                <SiteLogo className="monitor-icon"/>
            </Link>
            <h1>TAKE BACK THE NET</h1>
        </div>
    );   
}