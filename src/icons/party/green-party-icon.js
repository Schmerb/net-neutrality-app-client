// // // // // // // // // //
//
//    Green Party Icon
//
// // // // // // // // // //


import React from 'react';

export default function GreenPartyIcon(props) {
    return(
            <img className={props.className} onClick={props.onClick} alt="Green party logo" aria-label="Green party icon" src={process.env.PUBLIC_URL + "/media/assets/icons/green-party-logo.png"} />
    );
}
