// // // // // // // // // //
//
//   Sources Page
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';

import SourcesList from './source-list';

import { getFullName } from 'utils/states';
// import { scrollIt }    from 'utils/scroll';
import { updateState } from 'services/candidates';

export class SourcesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: this.props.location.pathname.slice(9)
        };
    }

    componentWillMount() {
        updateState(this.state.state);
    }
   

    render() {
        return(
            <section className="sources-page">
                <div className="sources-title">
                    <h2>Sources</h2>
                    <h3>{getFullName(this.state.state)}</h3>
                </div>

                <div className="sources-inner-wrap">
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