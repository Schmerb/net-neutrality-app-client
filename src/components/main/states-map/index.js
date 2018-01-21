// // // // // // // // // //
//
//   States Map
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';

import USAMap from 'react-usa-map';
import CandidatesContainer from './candidates-container';

import { setCurrentState, getCandidates, displayCandidates } from 'actions/map';

import { getFullName } from 'utils/states';


export class StatesMap extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Handles all clicks on map
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    handleMapClick = e => {
        const state = e.target.dataset.name;
        this.props.dispatch(setCurrentState(state));
        this.props.dispatch(getCandidates(getFullName(state)));
        this.props.dispatch(displayCandidates());
    };

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Custom Map Configs
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    statesCustomConfig = () => ({
        [this.props.currentState]: {
            fill: "grey",
            stroke: "grey"
        }
    });

    render() {
        return(
            <div className="usa-map-container">
                <USAMap customize={this.statesCustomConfig()} 
                        defaultFill={"transparent"}  
                        onClick={this.handleMapClick}
                        title={"Map of the United States of America"}
                        width={this.props.width}/>
                <CandidatesContainer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    width: state.display.width,
    currentState: state.map.currentState
});

export default connect(mapStateToProps)(StatesMap);
