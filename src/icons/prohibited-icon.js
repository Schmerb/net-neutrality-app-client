// // // // // // // // // //
//
//       Prohibited Icon
//
// // // // // // // // // //

import React from 'react';

export default function ProhibitedIcon(props) {
    return(
        <svg className={props.className} onClick={props.onClick} role="img" aria-label="Prohibited icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fillRule="evenodd" clipRule="evenodd" d="M50 5C25.2 5 5 25.2 5 50s20.2 45 45 45 45-20.2 45-45S74.8 5 50 5zm0 80.7c-19.7 0-35.7-16-35.7-35.7 0-7.9 2.6-15.2 7-21.2l49.9 49.9c-6 4.4-13.3 7-21.2 7zm28.7-14.5L28.8 21.3c5.9-4.4 13.2-7 21.2-7 19.7 0 35.7 16 35.7 35.7 0 7.9-2.6 15.2-7 21.2z"/></svg>
    );
}
