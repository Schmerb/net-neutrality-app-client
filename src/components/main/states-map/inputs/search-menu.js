import React, { Component } from 'react';
import { connect } from 'react-redux';

// import ArrowDown from 'icons/arrow-down';

import { getFullName, getAbbr, searchStates } from 'utils/states';
import { updateState } from 'services/candidates';

export class SearchMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: props.currentState === 'select-state' ? '' : getFullName(props.currentState),
            results: []
        };
    }

    componentDidMount() {
        this.refs.search.focus();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.currentState !== this.props.currentState) {
        }
        this.setState({ 
            val: getFullName(nextProps.currentState) 
        });
    }

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Handles input / search bar changes as user types
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    handleChange = (e) => {
        let val = e.target.value;
        this.setState({ val }); // updates input box as user types
        // this.searchStates(val); // searches and displays matching results as user types
        const results = searchStates(val);
        if(val !== '') {
            this.setState({ results });
        } else {
            this.setState({ results: [] });
        }

    }

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Handles click on search results to fire action to
    // update store with new State
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    handleClick = (e, state) => {
        updateState(getAbbr(state)); // updates new state
        this.setState({ results: [] }); // clears results to hide result box
    };

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Returns
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    
    getResults = () => {
        let { results } = this.state; 
        results = results.map((state, key) => (
            <li key={key}>
                <label className="aria-hidden" aria-hidden="false" htmlFor={`state-${key}`}>{state}</label>
                <a href="#!" id={`state-${key}`} onClick={e => this.handleClick(e, state)}>{state}</a>
            </li>
        ));
        return results;
    }

    render() {
        const results = this.getResults();
        const show = results.length > 0 ? 'show':'';
        return(
            <form className="search-form" action="#!" onSubmit={e => e.preventDefault()} autoComplete="off">
                <label className="aria-hidden" aria-hidden="false" htmlFor="search">Please search for a state</label>
                <input id="search" ref="search" type="search" placeholder="Search by State" value={this.state.val}
                       onChange={this.handleChange} />

                <div className={`results-box ${show}`}>
                    <ul>
                        {results}
                    </ul>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    currentState: state.map.currentState
});

export default connect(mapStateToProps)(SearchMenu);