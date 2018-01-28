// // // // // // // // // //
//
//   Candidate Avatar
//
// // // // // // // // // //

import React from 'react';

import ProhibitedIcon   from 'icons/prohibited-icon';
import QuestionMarkIcon from 'icons/question-mark';
import RepublicanIcon   from 'icons/party/republican-icon';
import DemocraticIcon   from 'icons/party/democratic-icon';
import LibertarianIcon  from 'icons/party/libertarian-icon';
import IndependentIcon  from 'icons/party/independent-icon';

export default function CandidateAvatar(props) {
    let prohibitedIcon = null;
    switch(props.supports) {
        case 'NO SUPPORT':
            prohibitedIcon = <ProhibitedIcon className="prohibited-icon"/>
            break;
        case 'UNKNOWN':
            prohibitedIcon = <ProhibitedIcon className="prohibited-icon support"/>
            break;
        default:    
    }


    let partyIcon = null;
    switch(props.party) {
        case 'Republican':
            partyIcon = <RepublicanIcon className="party-icon republican"/>;
            break;
        case 'Democratic':
            partyIcon = <DemocraticIcon className="party-icon democratic"/>;
            break;
        case 'Libertarian':
            partyIcon = <LibertarianIcon className="party-icon libertarian"/>;
            break;
        case 'Independent':
            partyIcon = <IndependentIcon className="party-icon independent"/>;
            break;
        default: 
            partyIcon = <QuestionMarkIcon className="party-icon question-mark"/>;
    }

    const img_styles = {
        backgroundImage: `url(${props.imageURL})`
    };
    
    return(
        <div className="avatar-wrap">
            <div className="avatar-img" style={img_styles}>
                {prohibitedIcon}
            </div>
            {partyIcon}
        </div>
    );
}