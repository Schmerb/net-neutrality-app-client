import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFullName } from 'utils/states';

export class CandidatesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div class="candidates-container">
                <h2>{getFullName(this.props.currentState)}</h2>
                <ul>
                    <h2>Senate</h2>
                    {/* {candidates} */}
                    <li>
                        <div class="candidate-wrap">One</div>
                    </li>
                    <li>
                        <div class="candidate-wrap">Two</div>
                    </li>
                    <li>
                        <div class="candidate-wrap">Three</div>
                    </li>
                </ul>
                <ul>
                    <h2>House of Representatives.</h2>
                    {/* {candidates} */}
                    <li>
                        <div class="candidate-wrap">One</div>
                    </li>
                    <li>
                        <div class="candidate-wrap">Two</div>
                    </li>
                    <li>
                        <div class="candidate-wrap">Three</div>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    width: state.display.width,
    currentState: state.map.currentState
});

export default connect(mapStateToProps)(CandidatesContainer);