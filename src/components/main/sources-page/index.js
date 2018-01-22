// // // // // // // // // //
//
//   Sources Page
//
// // // // // // // // // //

import React, { Component } from 'react';
// import { connect } from 'react-redux';

import { getFullName } from 'utils/states';

export default class SourcesPage extends Component {
    render() {
        // removes "/sources/" from path
        let state = this.props.location.pathname.slice(9);
        console.log(this.props);
        console.log({state});
        return(
            <section className="sources-page">
                <h2>Sources</h2>
                <h3>{getFullName(state)}</h3>

                {/* SENATE */}
                <section className="senate-sources">
                    <h4>Senate</h4>
                    <ul></ul>
                </section>

                {/* HOUSE */}
                <section className="house-sources">
                    <h4>House of Representatives</h4>
                    <ul></ul>
                </section>

            </section>
        );
    }
}