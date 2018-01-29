import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArrowDown from 'icons/arrow-down';

import { states, getFullName } from 'utils/states';

export class SearchMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: props.currentState === 'select-state' ? '' : getFullName(props.currentState)
        };
    }

    componentDidMount() {
        this.refs.search.focus();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.currentState !== this.props.currentState) {
            this.setState({ 
                val: getFullName(nextProps.currentState) 
            });
        }
    }

    handleChange = (e) => {
        let val = e.target.value;
        this.setState({ val });
        // start sorting by matching val to all states
        // show list below search bar
        console.log(states);
    }

    render() {
        return(
            <form className="search-form" action="#!" onSubmit={e => e.preventDefault()}>
                <input ref="search" type="text" placeholder="Search by State" value={this.state.val}
                       onChange={this.handleChange}/>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    currentState: state.map.currentState
});

export default connect(mapStateToProps)(SearchMenu);