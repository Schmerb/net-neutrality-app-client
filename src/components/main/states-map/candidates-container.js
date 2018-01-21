// // // // // // // // // //
//
//   Candidate Container
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CandidatesList from './candidates-list';

import { setCurrentState, getCandidates, displayCandidates } from 'actions/map';
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
        if(state !== 'select-state') {
            this.props.dispatch(setCurrentState(state));
            this.props.dispatch(getCandidates(getFullName(state)));
            this.props.dispatch(displayCandidates());
        };
    }

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
                <p className="directions">Select your state to see which candidates support net neutrality</p>
                <div className="candidates-inner-wrap">
                    <div className="select-box-wrap">
                        <ArrowDown className="arrow-down"/>
                        <select className="select-box" value={currentState}  onChange={this.handleSelect} placeholder="Testing">
                            <option value="select-state">Select State</option>
                            {options}
                        </select>
                    </div>
                    <CandidatesList group='senate' candidates={senate} />
                    <CandidatesList group='house' candidates={house} />
                </div>
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
