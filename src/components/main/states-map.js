import React, { Component } from 'react';
import { connect } from 'react-redux';

import USAMap from 'react-usa-map';
import CandidatesContainer from './candidates-container';

import { setCurrentState } from 'actions/map';



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
    };

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Custom Map Configs
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    statesCustomConfig = () => ({
        "DC": {
            fill: "navy",
            clickHandler: e => alert(`This is a custom event for ${e.target.dataset.name}`)
        }
    });

    render() {
        return(
            <div class="usa-map-container">
                <USAMap customize={this.statesCustomConfig()} 
                        defaultFill={"transparent"}  
                        onClick={this.handleMapClick}
                        title={"Map of the United States of America"}
                        width={this.props.width / 2}/>
                <CandidatesContainer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    width: state.display.width
});

export default connect(mapStateToProps)(StatesMap);
