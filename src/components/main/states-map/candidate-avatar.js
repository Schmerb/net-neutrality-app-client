// // // // // // // // // //
//
//   Candidate Avatar
//
// // // // // // // // // //

import React from 'react';

import CheckMarkLgIcon  from 'icons/check-mark-lg';
import XMarkIcon        from 'icons/x-mark';
import ProhibitedIcon   from 'icons/prohibited-icon';
import UnknownMarkIcon  from 'icons/unknown-mark';
import QuestionMarkIcon from 'icons/question-mark';

import RepublicanIcon  from 'icons/party/republican-icon';
import DemocraticIcon  from 'icons/party/democratic-icon';
import LibertarianIcon from 'icons/party/libertarian-icon';
import IndependentIcon from 'icons/party/independent-icon';

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
        prohibitedIcon = <ProhibitedIcon className="prohibited-icon support"/>
    }

    let partyIcon = null;
    let classes = '';
    if(props.party === 'Republican') {
        partyIcon = <RepublicanIcon className="republican"/>;
    } else if(props.party === 'Democratic'){
        partyIcon = <DemocraticIcon className="democratic"/>;
    } else if(props.party === 'Libertarian'){
        partyIcon = <LibertarianIcon className="libertarian"/>;
        classes = 'png';
    } else if(props.party === 'Independent'){
        partyIcon = <IndependentIcon className="independent"/>;
        classes = 'png';
    } else {
        partyIcon = <QuestionMarkIcon className="question-mark"/>;
        classes = 'qmark';
    }
    
    return(
        <div className="avatar">
            <div className="support-icon-wrap">
                {supportIcon}
            </div>
            {prohibitedIcon}
            <div className={`party-icon-wrap ${classes}`}>
                {partyIcon}
            </div>
            <div className="img-wrap" data-id={props.id}>
                <img src={props.imgUrl} alt={`${props.firstName} ${props.lastName}`}/>
            </div>
        </div>
    );
}