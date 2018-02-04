// // // // // // // // // //
//
//   Sources List
//
// // // // // // // // // //

import React, { Component } from 'react';

import CandidateSource from './candidate-source';

import { scrollIt } from 'utils/scroll';

export default class SourcesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: ''
        };
    }
    
    componentDidMount() {
        let hash = this.props.location.hash.slice(1);
        if(hash !== '') {
            // Highlights the source from hash endpoint
            setTimeout(() => {
                const element = document.getElementById(hash);
                scrollIt(element, 1000, 'linear', window.innerHeight / 2);
            }, 1000);
        }
    }

    componentWillMount() {
        window.addEventListener('scroll', this.handleWindowScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleWindowScroll);
    }

    // * * * * * * * * * * * * * * * * 
    // Fixed the congress group title
    // to top of screen when it reaches
    // final position
    // * * * * * * * * * * * * * * * * 
    handleWindowScroll = e => {
        let offset = window.innerWidth >= 900 ? 245 : 105;
        const someDiv       = document.getElementById(`${this.props.group}-sources`);
        const distanceToTop = someDiv.getBoundingClientRect().top - offset;
        if(distanceToTop <= 0 && this.state.classes === '') {
            this.setState({ classes: 'fixed' });
        } else if(distanceToTop > 0 && this.state.classes === 'fixed') {
            this.setState({ classes: '' });
        }
    };

    render() {
        const candidates = this.props
                               .candidates
                               .filter(candidate => !(candidate.source === '' || candidate.source.trim() === 'sent'))
                               .map((candidate, key) => {
                                return (
                                    <li key={key} id={candidate.lastName} name={candidate.lastName}>
                                        <CandidateSource candidate={candidate} location={this.props.location}/>
                                    </li>
                                )
        });
        return(
            <section className={`${this.props.group}-sources sources`} id={`${this.props.group}-sources`}>
                <h4 className={this.state.classes}>{this.props.group.charAt(0).toUpperCase() + this.props.group.slice(1)}</h4>
                <ul className="sources-list-ul">{candidates}</ul>
            </section>
        );
    }
}   