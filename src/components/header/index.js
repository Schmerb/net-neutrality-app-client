// // // // // // // // // //
//
//      Header
//
// // // // // // // // // //

import React from 'react';

import Logo      from './logo';
import ThinkLogo from 'components/footer/think-logo';

export default function Header(props) {
    let thinkLogo = null;
    if((props.path === '/' && props.width >= 900) || (props.path === '/about-project')) {
        thinkLogo = <ThinkLogo />;
    }

    return(
        <header role="banner" className="header">
            {thinkLogo}
            <Logo />
        </header>
    );
}

