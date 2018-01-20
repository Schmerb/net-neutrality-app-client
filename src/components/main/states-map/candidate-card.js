// // // // // // // // // //
//
//   Candidate Card
//
// // // // // // // // // //

import React, { Component } from 'react';

import CandidateAvatar from './candidate-avatar';

export default class CandidateCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Returns props word indicating if candidate
    // supports or opposes Net Neutrality
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    getSupport = () => {
        let { supportsNetNeutrality: supports } = this.props.candidate;
        supports = supports.toLowerCase();
        const supportClass = `support-${supports}`;
        if(supports === 'yes') {
            supports = 'SUPPORTS';
        } else if (supports === 'no') {
            supports = 'NO SUPPORT';
        } else {
            supports = 'UNKNOWN';
        }
        return { supports, supportClass };
    };

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Returns appropriate number suffix
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    getDistrictSuffix = () => {
        let num = this.props.candidate.district;
        if (num === 'unknown') return num;
        if (num === 4 || num === 11 || num === 12 || num === 13) return num + 'th District';
        const char = num.toString().charAt(num.toString().length - 1);
        switch (char) {
            case '1':
                return num + 'st District';
            case '2':
                return num + 'nd District';
            case '3':
                return num + 'rd District';
            default:
                return num + 'th District';
        }
    };

    render() {
        const { supports, supportClass } = this.getSupport();
        const district = this.getDistrictSuffix();
        const { firstName, 
                lastName, 
                party, 
                campaignWebsite, 
                source,
                imgUrl,
                id 
        } = this.props.candidate;
        
        return(
            <div className="candidate-wrap">
                <CandidateAvatar id={id} imgUrl={imgUrl} firstName={firstName} 
                                 lastName={lastName} supports={supports} party={party} />
                <h3><span>{firstName}</span> <span>{lastName}</span></h3>
                {/* <span>{party}</span> */}
                <span className="district">{district}</span>
                <span className={`${supportClass} support`}>{supports}</span>
                <span><a href={campaignWebsite} target="__blank">Website</a></span>
                <span><a href={source} target="__blank">Source</a></span>
            </div>
        );
    }
}