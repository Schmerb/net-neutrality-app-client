// // // // // // // // // //
//
//   Sources List
//
// // // // // // // // // //

import React, { Component } from 'react';

import CandidateSource from './candidate-source';

export default class SourcesList extends Component {
    
    componentDidMount() {
        let hash = this.props.location.hash.slice(1);
        setTimeout(() => {
            const element = document.getElementById(hash);
            const elementRect = element.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            const middle = absoluteElementTop - (window.innerHeight / 2);
            window.scrollTo(0, middle);
        }, 1000);
    }

    render() {
        const candidates = this.props
                               .candidates
                               .filter(candidate => !(candidate.source === '' || candidate.source.includes('sent')))
                               .map((candidate, key) => {
                                return (
                                    <li key={key} id={candidate.lastName} name={candidate.lastName}>
                                        <CandidateSource candidate={candidate}/>
                                    </li>
                                )
        });
        return(
            <section className={`${this.props.group}-sources sources`}>
                <h4>{this.props.group.charAt(0).toUpperCase() + this.props.group.slice(1)}</h4>
                <ul>{candidates}</ul>
            </section>
        );
    }
}   