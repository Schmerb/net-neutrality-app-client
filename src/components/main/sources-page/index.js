// // // // // // // // // //
//
//   Sources Page
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';

import SourcesList    from './source-list';
import StatesDropdown from './states-dropdown';

import { updateState } from 'services/candidates';

export class SourcesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: this.props.location.pathname.slice(9),
            classes: ''
        };
    }

    componentWillMount() {
        updateState(this.state.state);
        window.addEventListener('scroll', this.handleWindowScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleWindowScroll);
    }

    // * * * * * * * * * * * * * * * * 
    // Fires on user scroll event
    // * * * * * * * * * * * * * * * * 
    handleWindowScroll = e => {
        const someDiv       = document.getElementById('sources-page');
        const distanceToTop = someDiv.getBoundingClientRect().top;
        // console.log({distanceToTop});
        if(distanceToTop <= 0 && this.state.classes === '') {
            this.setState({ classes: 'fixed' });
        } else if(distanceToTop > 0 && this.state.classes === 'fixed') {
            this.setState({ classes: '' });
        }
    };
   

    render() {
        return(
            <section className="sources-page" id="sources-page">
                <div className={`sources-title ${this.state.classes}`} >
                    <h2>Sources</h2>
                    <StatesDropdown currentState={this.state.state} location={this.props.location} history={this.props.history}/>
                </div>

                <div className={`sources-inner-wrap ${this.state.classes}`}>
                    {/* SENATE */}
                    <SourcesList group="senate" candidates={this.props.senate} location={this.props.location}/>
                    {/* HOUSE */}
                    <SourcesList group="house" candidates={this.props.house} location={this.props.location}/>
                </div>

            </section>
        );
    }
}

const mapStateToProps = state => ({
    house: state.map.house,
    senate: state.map.senate
});

export default connect(mapStateToProps)(SourcesPage);