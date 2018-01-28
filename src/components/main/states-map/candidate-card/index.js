// // // // // // // // // //
//
//   Candidate Card
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CandidateAvatar  from './avatar';
import CandidateInfo    from './info';
import CandidateSupport from './support';


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
        const { 
            party, 
            imageURL
        } = this.props.candidate;

        // const house_senate = this.props.candidate['house-senate'];

        const { supports, supportClass } = this.getSupport();

       

        const source = this.getSource();
        return(
            <div className="candidate-wrap">
                <CandidateAvatar imageURL={imageURL} supports={supports} party={party}/>

                <CandidateInfo candidate={this.props.candidate} source={source}/>

                <CandidateSupport supports={supports} supportClass={supportClass}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentState: state.map.currentState
});

export default connect(mapStateToProps)(CandidateCard);