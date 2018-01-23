// // // // // // // // // //
//
//   States Map
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';

import USAMap from 'react-usa-map';
import CandidatesContainer from './candidates-container';

import { updateState } from 'services/candidates';

export class StatesMap extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Handles all clicks on map
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    handleMapClick = e => {
        const { attributes } = e.target;
        let state = this.props.currentState;
        for(let i=0; i<attributes.length; i++) {
            if (/^data-.*/.test(attributes[i].name)) {
                if(attributes[i].name === 'data-name') {
                    state = attributes[i].value;
                    updateState(state); // Dispatches actions to update store with state / candidates
                }
            }
        }
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
