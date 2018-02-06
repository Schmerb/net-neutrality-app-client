// // // // // // // // // //
//
//    Libertarian Icon
//
// // // // // // // // // //

import React from 'react';

export default function LibertarianIcon(props) {
  return (
    <img
      className={props.className}
      onClick={props.onClick}
      src={process.env.PUBLIC_URL + '/media/assets/icons/libertarian-icon.png'}
      alt="Libertarian party logo"
    />
  );
}
