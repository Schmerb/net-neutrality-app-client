// // // // // // // // // //
//
//    Independent Icon
//
// // // // // // // // // //

import React from 'react';

export default function IndependentIcon(props) {
  return (
    <img
      className={props.className}
      onClick={props.onClick}
      src={process.env.PUBLIC_URL + '/media/assets/icons/independent-icon.png'}
      alt="Independent party logo"
    />
  );
}
