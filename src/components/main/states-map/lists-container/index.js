// // // // // // // // // //
//
//   Lists Container
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CandidatesList from './candidates-list';

import Spinner from 'react-spinkit';

export class ListsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentGroup: 'senate'
        };
    }

    handleClick = (currentGroup) => {
        this.setState({ currentGroup });
    };

    render() {
        const group   = this.state.currentGroup;
        const spinner = <Spinner name='circle' fadeIn="quarter" overrideSpinnerClassName="loading-spinner"/>;

        return(
            <div className={`lists-container ${this.props.className}`}>
                <div className="btn-wrap">
                    <button type="button" className={group === 'senate' ? 'active':''} 
                                        onClick={e => this.handleClick('senate')}>Senate</button>
                    <button type="button" className={group === 'house' ? 'active':''}  
                                        onClick={e => this.handleClick('house')}>House</button>
                </div>
                {
                    this.props.loading 
                    ?
                    spinner
                    :
                    <CandidatesList group={group} 
                                    candidates={this.props[group]} />
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.map.loading
});

export default connect(mapStateToProps)(ListsContainer);