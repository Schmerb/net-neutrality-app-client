// // // // // // // // // //
//
//   Candidate Support
//
// // // // // // // // // //

import React from 'react';

import CheckMarkLgIcon  from 'icons/check-mark-lg';
import XMarkIcon        from 'icons/x-mark';
import UnknownMarkIcon  from 'icons/unknown-mark';

export default function CandidateSupport(props) {
    const { supports, supportClass } = props;
    let supportIcon = null;
    switch(props.supports) {
        case 'SUPPORTS':
            supportIcon = <CheckMarkLgIcon className="check-mark"/>;
            break;
        case 'NO SUPPORT':
            supportIcon = <XMarkIcon className="x-mark"/>;
            break;
        default:
            supportIcon = <UnknownMarkIcon className="unknown-mark"/>;
    }
    return(
        <div className="support-wrap">
            <span className={`${supportClass} support`}>
                {supports}
                {supportIcon}
            </span>
        </div>
    );
}
