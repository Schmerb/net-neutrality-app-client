// // // // // // // // // //
//
//   Candidates List
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CandidateCard from '../candidate-card/';

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

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Checks if candidates exist 
    // returns a) a special message string if there are none
    //              OR
    //         b) empty string otherwise
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    checkIfEmpty = () => {
        let group      = this.props.group === 'senate' ? 'Senate':'House',
            otherGroup = this.props.group === 'senate' ? 'House':'Senate';

        let noCandidateMsg = '';
        const { length } = this.props.candidates;
        if(length === 1 ) {
            const { firstName, lastName } = this.props.candidates[0];
            if(firstName === '' && lastName === '') {
                noCandidateMsg = `No open ${group} seats in this state in 2018. Check out the ${otherGroup}!`;
            }
        } else if (length === 0) {
            noCandidateMsg = `No open ${group} seats in this state in 2018. Check out the ${otherGroup}!`;
        }
        return noCandidateMsg;
    }

    render() {
        const noCandidateMsg = this.checkIfEmpty(),
              candidates     = this.getCandidates(this.props.candidates),
              classes        = this.getListClasses(this.props.candidates.length);
        
        return(
            <div className={`${this.props.group}-wrap candidate-list`}>

                {
                    noCandidateMsg !== '' 
                    ? 
                    <p>{noCandidateMsg}</p> 
                    : 
                    <ul className={classes}>
                        {candidates}
                    </ul>
                }

            </div>
        );
    }
}

const mapStateToProps = state => ({
    display: state.map.display,
    loading: state.map.loading
});

export default connect(mapStateToProps)(CandidatesList);