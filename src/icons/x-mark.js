// // // // // // // // // //
//
//       X Mark Icon
//
// // // // // // // // // //

import React from 'react';

export default function XMarkIcon(props) {
    return(
        <svg className={props.className} onClick={props.onClick} role="img" aria-label="X mark icon"  width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M24 12c0 6.627-5.372 12-12 12S0 18.627 0 12 5.372 0 12 0s12 5.373 12 12" fill="red"/><path fill="#FFF" d="M16.973 15.22l-1.736 1.735-3.614-3.614-3.737 3.737-1.927-1.927 3.737-3.737-3.651-3.651L7.78 6.027l3.65 3.651 3.72-3.72 1.927 1.928-3.719 3.72z"/></g></svg>
    );
}

