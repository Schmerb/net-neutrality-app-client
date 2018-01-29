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
                <label className="aria-hidden" aria-hidden="false" htmlFor={`web-${lastName}`}>Website for {firstName} {lastName}</label>
                <span><Link id={`web-${lastName}`} to={campaignWebsite} target="_blank">Website</Link></span>
                <label className="aria-hidden" aria-hidden="false" htmlFor={`source-${lastName}`}>Source for {firstName} {lastName}</label>
                <span>{props.source}</span>
            </div>
        </div>
    );
}