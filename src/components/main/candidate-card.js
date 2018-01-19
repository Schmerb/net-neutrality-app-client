import React, { Component } from 'react';
// import { connect } from 'react-redux';

export default class CandidateCard extends Component {
    render() {
        const { firstName, 
                lastName, 
                party, 
                district, 
                campaignWebsite, 
                source 
        } = this.props.candidate;
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
        return(
            <div className="candidate-wrap">
                <h3><span>{firstName}</span> <span>{lastName}</span></h3>
                <span>{party}</span>
                <span className="district">{district}</span>
                <span className={`${supportClass} support`}>{supports}</span>
                <span><a href={campaignWebsite} target="__blank">Website</a></span>
                <span><a href={source} target="__blank">Source</a></span>
            </div>
        );
    }
}