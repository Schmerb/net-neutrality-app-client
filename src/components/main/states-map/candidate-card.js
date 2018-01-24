// // // // // // // // // //
//
//   Candidate Card
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CandidateAvatar from './candidate-avatar';

import { getDistrictSuffix } from 'utils/district-suffix';

export class CandidateCard extends Component {
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
        let supportClass = `support-${supports}`;
        if(supports === 'yes') {
            supports = 'SUPPORTS';
        } else if (supports === 'no') {
            supports = 'NO SUPPORT';
        } else {
            supports = 'UNKNOWN';
            supportClass = 'support-unknown';
        }
        
        return { supports, supportClass };
    };

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Returns either url to 3rd party source or url to 
    // redirect to sources page within website to show quotes
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    getSource = () => {
        const { source, lastName } = this.props.candidate;
        let url = '', classes = '';
        if(source === '' || source === 'sent') {
            classes = 'disabled';
        } else if(source.includes('Email') || source.includes('email') || source.includes('response')) {
            url = `/sources/${this.props.currentState}#${lastName}`;
        } else if(source.includes('Retweet') || source.includes('Facebook')) {
            url = `/sources/${this.props.currentState}#${lastName}`;
        } else {
            // console.log(source);
            // console.log(source.slice(0,3));
            if(source.slice(0,3) === 'www') {
                url = `https://${source}`;
            } else {
                url = source;
            }
        }
        return <Link to={url} className={classes} target="_blank">Source</Link>;
    }

    render() {
        const { firstName, 
            lastName, 
            district,
            party, 
            campaignWebsite, 
            imageURL,
            id 
        } = this.props.candidate;

        const house_senate = this.props.candidate['house-senate'];

        const distrSuffix = getDistrictSuffix(district);
        const { supports, supportClass } = this.getSupport();

        const source = this.getSource();
        return(
            <div className="candidate-wrap">
                <CandidateAvatar id={id} imageURL={imageURL} firstName={firstName} 
                                 lastName={lastName} supports={supports} party={party} />
                <h3><span>{firstName}</span> <span>{lastName}</span></h3>
                <span className="district">{house_senate === 'house' ? distrSuffix:''}</span>
                <span className={`${supportClass} support`}>{supports}</span>
                <span><a href={campaignWebsite} target="_blank">Website</a></span>
                <span>{source}</span>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentState: state.map.currentState
});

export default connect(mapStateToProps)(CandidateCard);