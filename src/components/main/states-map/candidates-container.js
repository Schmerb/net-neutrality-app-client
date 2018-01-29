// // // // // // // // // //
//
//   Candidate Container
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';

import DropDownMenu   from './inputs/drop-down-menu';
import SearchMenu     from './inputs/search-menu';
import ListsContainer from './lists-container/';

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
                    {
                        window.innerWidth < 900 
                        ? 
                        (<DropDownMenu handleSelect={this.handleSelect} options={options} currentState={currentState}/>)
                        :
                        (<SearchMenu />)
                    }
                    
                    { !this.props.display ? (<p className="directions">Select your state to see which candidates support net neutrality</p>) : null }
                    
                    <ListsContainer senate={senate} house={house} className={!this.props.display ? 'hide':''}/>
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    width: state.display.width,
    currentState: state.map.currentState,
    house: state.map.house,
    senate: state.map.senate,
    display: state.map.display
});

export default connect(mapStateToProps)(CandidatesContainer);
