// // // // // // // // // //
//
//   Candidate Container
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CandidatesList from './candidates-list';
import ArrowDown from 'icons/arrow-down';

import { states } from 'utils/states';
import { updateState } from 'services/candidates';

const entries = require('object.entries');

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
            updateState(state); // Dispatches actions to update store with state / candidates
        };
    }

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Fills dropdown menu with all states
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    getAllStates = (currentState) => {
        return entries(states)
                     .map((state, key) => (
                        <option key={key} value={state[1]}>{state[0]}</option>
                    ));
    };

    render() {
        const { house, senate, currentState } = this.props;
        const options = this.getAllStates(currentState);
        return(
            <div className="candidates-container">
                <div className="candidates-inner-wrap">
                    <form className="select-form" action="#!">
                        <ArrowDown className="arrow-down"/>
                        <label htmlFor="state-select-dropdown" className="aria-hidden" aria-hidden="true">Select a state</label>
                        <select id="state-select-dropdown" className="select-box" value={currentState}  
                                                        onChange={this.handleSelect} placeholder="Testing">
                            <option value="select-state">Select State</option>
                            {options}
                        </select>
                    </form>
                    <p className="directions">Select your state to see which candidates support net neutrality</p>
                    {/* <CandidatesList group='senate' candidates={senate} />
                    <CandidatesList group='house' candidates={house} /> */}
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
