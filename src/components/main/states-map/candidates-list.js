// // // // // // // // // //
//
//   Candidates List
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CandidateCard from './candidate-card/';

import Spinner from 'react-spinkit';

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

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // returns appropriate class based on list length / # of 
    // candidates per list to style correctly
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    getListClasses = (len) => {
        if(len === 0) {
            return 'no-candidates';
        } else if(len === 1) {
            return 'one-candidates';
        } else if(len === 2) {
            return 'two-candidates';
        } else {
            return '';
        }
    };

    render() {
        const candidates = this.getCandidates(this.props.candidates),
              classes    = this.getListClasses(this.props.candidates.length),
              spinner    = <Spinner name='circle' fadeIn="quarter" overrideSpinnerClassName="loading-spinner"/>;
        return(
            <div className={`${this.props.group}-wrap candidate-list`}>
                <ul className={classes}>
                    {this.props.loading ? spinner : candidates}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    display: state.map.display,
    loading: state.map.loading
});

export default connect(mapStateToProps)(CandidatesList);