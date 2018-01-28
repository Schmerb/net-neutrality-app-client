// // // // // // // // // //
//
//   Candidate Info
//
// // // // // // // // // //

import React from 'react';
import { Link } from 'react-router-dom';

export default function CandidateInfo(props) {
    const { firstName, lastName, campaignWebsite } = props.candidate;
    return(
        <div className="info-wrap">
            <h3><span>{firstName}</span> <span>{lastName}</span></h3>
            <div className="links-wrap">
                <span><Link to={campaignWebsite} target="_blank">Website</Link></span>
                <span>{props.source}</span>
            </div>
        </div>
    );
}