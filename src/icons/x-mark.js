// // // // // // // // // //
//
//       X Mark Icon
//
// // // // // // // // // //

import React from 'react';

export default function XMarkIcon(props) {
    return(
        <svg className={props.className} onClick={props.onClick} role="img" aria-label="X mark icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 10.917c-21.584 0-39.083 17.499-39.083 39.083S28.416 89.083 50 89.083 89.083 71.584 89.083 50 71.584 10.917 50 10.917zm17.045 51.885a3 3 0 0 1-4.242 4.244L50 54.243 37.197 67.044c-.586.585-1.354.878-2.121.878s-1.535-.293-2.121-.879a3 3 0 0 1 0-4.243L45.757 50 32.955 37.198a3 3 0 1 1 4.242-4.243L50 45.757l12.803-12.803a3 3 0 0 1 4.242 4.243L54.242 50l12.803 12.802z"/></svg>
    );
}

