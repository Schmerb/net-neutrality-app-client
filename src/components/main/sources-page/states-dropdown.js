// // // // // // // // // //
//
//   States Dropdown
//
// // // // // // // // // //
import React, { Component } from 'react';
// import { connect } from 'react-redux';

import ArrowDown from 'icons/arrow-down';

import { states } from 'utils/states';
import { updateState } from 'services/candidates';

const entries = require('object.entries');

export default class StatesDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentState: props.currentState
        };
    }

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Handles change on dropdown menu, dispatches actions to
    // update store with new state
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    handleSelect = (e) => {
        const state = e.target.value;
        if(state !== 'select-state') {
            this.props.history.push({ pathname: `/sources/${state}` });
            updateState(state); // Dispatches actions to update store with state / candidates
            this.setState({ currentState: state });
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
        console.log(this.props);
        const { currentState } = this.props;
        const options = this.getAllStates(currentState);
        return(
            <div className="sources-select-box-wrap">
                <ArrowDown className="arrow-down"/>
                <label htmlFor="state-select-dropdown" className="aria-hidden" aria-hidden="true">Select a state</label>
                <select id="state-select-dropdown" className=" select-box" value={this.state.currentState}  
                                                    onChange={this.handleSelect} >
                    <option value="select-state">Select State</option>
                    {options}
                </select>
            </div>
        );
    }
}