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
        big       = props.width >= 900,
        landing   = path === '/',
        aboutProj = path === '/about-project',
        sources   = path.includes('sources');
    let classes = `${landing?'landing':''} ${sources?'sources':''}`;
    if((landing && big) || (aboutProj && big) || (sources && big)) {
        thinkLogo = <ThinkLogo className={classes}/>;
    }

    return(
        <header role="banner" className="header">
            {thinkLogo}
            <Logo />
        </header>
    );
}

