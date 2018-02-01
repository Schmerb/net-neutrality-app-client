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
        this.state = {
            fadeIn: ''
        };
    }

    componentWillMount() {
        document.body.classList.add('map');
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ fadeIn: 'fadeIn' });
        }, 200);
    }

    componentWillUnmount() {
        document.body.classList.remove('map');
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

    getMapOptions = () => {
        return {
            title:   "Map of the United States of America",
            defaultFill: "transparent",
            customize: this.statesCustomConfig(),
            onClick:   this.handleMapClick
        }
    };

    render() {
        return(
            <div className={`usa-map-container ${this.state.fadeIn}`}>
                <USAMap {...this.getMapOptions()}/>
                <CandidatesContainer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    width: state.display.width,
    height: state.display.height,
    currentState: state.map.currentState
});

export default connect(mapStateToProps)(StatesMap);
