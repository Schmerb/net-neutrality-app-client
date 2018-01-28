// // // // // // // // // //
//
//   Lists Container
//
// // // // // // // // // //

import React, { Component } from 'react';

import CandidatesList from './candidates-list';

export default class ListsContainer extends Component {
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
        const group = this.state.currentGroup;
        return(
            <div className={`lists-container ${this.props.className}`}>
                <button type="button" className={group === 'senate' ? 'active':''} 
                                      onClick={e => this.handleClick('senate')}>Senate</button>
                <button type="button" className={group === 'house' ? 'active':''}  
                                      onClick={e => this.handleClick('house')}>House</button>
                <CandidatesList group={group} 
                                candidates={this.props[group]} />
            </div>
        );
    }
}