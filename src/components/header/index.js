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
        console.log(props.path.slice(1));
        thinkLogo = <ThinkLogo className={props.path.slice(1)}/>;
    }

    return(
        <header role="banner" className="header">
            {thinkLogo}
            <Logo />
        </header>
    );
}

