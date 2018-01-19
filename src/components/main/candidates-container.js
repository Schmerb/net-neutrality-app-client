// // // // // // // // // //
//
//   Candidate Container
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CandidatesList from './candidates-list';

import { setCurrentState, getCandidates } from 'actions/map';
import { getFullName, states } from 'utils/states';

import ArrowDown from 'icons/arrow-down';

export class CandidatesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Handles change on dropdown menu, dispatches actions to
    // update store with new state
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    handleSelect = (e) => {
        const state = e.target.value;
        this.props.dispatch(setCurrentState(state));
        this.props.dispatch(getCandidates(getFullName(state)));
    };

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Fills dropdown menu with all states
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    getAllStates = (currentState) => {
        return Object.entries(states)
                     .map((state, key) => (
                        <option key={key} value={state[1]}>{state[0]}</option>
                    ));
    };

    render() {
        const { house, senate, currentState } = this.props;
        const options = this.getAllStates(currentState);
        return(
            <div className="candidates-container">
                <div className="select-box-wrap">
                    <ArrowDown className="arrow-down"/>
                    <select className="select-box" value={currentState} onChange={this.handleSelect}>
                        {options}
                    </select>
                </div>
                <CandidatesList group='senate' candidates={senate} />
                <CandidatesList group='house' candidates={house} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    width: state.display.width,
    currentState: state.map.currentState,
    house: state.map.house,
    senate: state.map.senate
});

export default connect(mapStateToProps)(CandidatesContainer);
