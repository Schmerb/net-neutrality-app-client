// // // // // // // // // //
//
//       Check Mark Icon
//
// // // // // // // // // //

import React from 'react';

export default function CheckMarkIcon(props) {
    return(
        <svg className={props.className} onClick={props.onClick} role="img" aria-label="Check mark icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm-5 67.9c-1 1.4-2.6 2.2-4.3 2.2-1.7 0-3.3-.8-4.3-2.2l-11-14.8c-1.8-2.4-1.3-5.7 1.1-7.4 2.4-1.8 5.7-1.3 7.4 1.1l6.7 9.1 21.8-29.3c1.7-2.4 5-2.8 7.4-1.1 2.4 1.8 2.9 5.1 1.1 7.4L45 72.9z"/></svg>
    );
}

