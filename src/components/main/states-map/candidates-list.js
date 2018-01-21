// // // // // // // // // //
//
//   Candidates List
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CandidateCard from './candidate-card';

export class CandidatesList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Returns all candidates for house/senate 
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    getCandidates = (candidates) => {
        return candidates.map((candidate, key) => (
            <li key={key}>
                <CandidateCard candidate={candidate}/>
            </li>
        ));
    };

    render() {
        const candidates = this.getCandidates(this.props.candidates);
        const properGroupName = this.props.group === 'senate' ? 'Senate':'House of Representatives';
        const display = this.props.display ? '': 'hidden';
        return(
            <div className={`${this.props.group}-wrap candidate-list ${display}`}>
                <h3>{properGroupName}</h3>
                <ul>
                    {candidates}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    display: state.map.display
});

export default connect(mapStateToProps)(CandidatesList);