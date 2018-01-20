// // // // // // // // // //
//
//   Candidate Avatar
//
// // // // // // // // // //

import React from 'react';

import CheckMarkIcon    from 'icons/check-mark';
import CheckMarkLgIcon  from 'icons/check-mark-lg';
import XMarkIcon        from 'icons/x-mark';
import ProhibitedIcon   from 'icons/prohibited-icon';
import UnknownMarkIcon  from 'icons/unknown-mark';
import RepublicanIcon   from 'icons/republican-icon';
import DemocraticIcon   from 'icons/democratic-icon';
import LibertarianIcon  from 'icons/libertarian-icon';
import IndependentIcon  from 'icons/independent-icon';
import QuestionMarkIcon from 'icons/question-mark';

export default function CandidateAvatar(props) {
    let supportIcon    = null,
        prohibitedIcon = null;
    if(props.supports === 'SUPPORTS') {
        supportIcon = <CheckMarkLgIcon className="check-mark"/>;
    } else if (props.supports === 'NO SUPPORT') {
        supportIcon = <XMarkIcon className="x-mark"/>;
        prohibitedIcon = <ProhibitedIcon className="prohibited-icon"/>
    } else {
        supportIcon = <UnknownMarkIcon className="unknown-mark"/>;
    }

    let partyIcon = null;
    if(props.party === 'Republican') {
        partyIcon = <RepublicanIcon className="republican"/>;
    } else if(props.party === 'Democratic'){
        partyIcon = <DemocraticIcon className="democratic"/>;
    } else if(props.party === 'Libertarian'){
        partyIcon = <LibertarianIcon className="libertarian"/>;
    } else if(props.party === 'Independent'){
        partyIcon = <IndependentIcon className="independent"/>;
    } else {
        partyIcon = <QuestionMarkIcon className="question-mark"/>;
    }
    
    return(
        <div className="avatar">
            <div className="svg-wrap">
                {supportIcon}
            </div>
            {prohibitedIcon}
            <div className="party-icon-wrap">
                {partyIcon}
            </div>
            <div className="img-wrap" data-id={props.id}>
                <img src={props.imgUrl} alt={`${props.firstName} ${props.lastName}`}/>
            </div>
        </div>
    );
}