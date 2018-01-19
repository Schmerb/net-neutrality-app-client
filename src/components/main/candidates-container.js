import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCurrentState, getCandidates } from 'actions/map';
import { getFullName, states } from 'utils/states';

export class CandidatesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSelect = (e) => {
        const state = e.target.value;
        this.props.dispatch(setCurrentState(state));
        this.props.dispatch(getCandidates(getFullName(state)));
    };

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Returns all candidates for house/senate 
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    getCandidates = (candidates) => {
        return candidates.map((candidate, key) => (
            <li key={key}>
                <div className="candidate-wrap">
                    <h3>{candidate.firstName} {candidate.lastName}</h3>
                    <span>{candidate.party}</span>
                    <span>{candidate.district}</span>
                    <span>{candidate.supportsNetNeutrality}</span>
                    <span><a href={candidate.campaignWebsite} target="__blank">Website</a></span>
                    <span><a href={candidate.source} target="__blank">Source</a></span>
                </div>
            </li>
        ));
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
        const houseCandidates   = this.getCandidates(house),
              senateCandidates  = this.getCandidates(senate);
        const options = this.getAllStates(currentState);
        return(
            <div className="candidates-container">
                <select name="" id="" value={currentState} onChange={this.handleSelect}>
                    {options}
                </select>

                <div className="senate-wrap">
                    <h3>Senate</h3>
                    <ul>
                        {senateCandidates}
                    </ul>
                </div>

                <div className="house-wrap">
                    <h3>House of Representatives.</h3>
                    <ul>
                        {houseCandidates}
                    </ul>
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