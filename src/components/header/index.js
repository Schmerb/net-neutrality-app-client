// // // // // // // // // //
//
//      Header
//
// // // // // // // // // //

import React from 'react';

import Logo      from './logo';
import ThinkLogo from 'components/footer/think-logo';

export default function Header(props) {
    let thinkLogo = null, 
        { path }  = props,
        big       = props.width >= 900;
    if((path === '/' && big) || (path === '/about-project' && big)) {
        thinkLogo = <ThinkLogo className={path.slice(1)}/>;
    }

    return(
        <header role="banner" className="header">
            {thinkLogo}
            <Logo />
        </header>
    );
}

