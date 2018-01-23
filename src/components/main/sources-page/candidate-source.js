// // // // // // // // // //
//
//   Candidate Source
//
// // // // // // // // // //

import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TwitterIcon  from 'icons/social/twitter-icon';
import FacebookIcon from 'icons/social/facebook-icon';
import ImgurIcon    from 'icons/social/imgur-icon';
import LinkIcon     from 'icons/link-icon';


export default class CandidateSource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: ''
        };
    }

    componentDidMount() {
        if(this.props.location.hash.slice(1) === this.props.candidate.lastName) {
            setTimeout(() => {
                this.setState({ classes: "highlight" });
                setTimeout(() => {
                    this.setState({ classes: "" });
                }, 3000);
            }, 150);
        }
    }

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Formats email responses to display on screen
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    formatEmailSrc = (src) => {
        src = src.split('�')
                  .join('')
                  .replace('Email response: ', '')
                  .replace('Email response:', '');
        src = `"${src}"`;
        return <p className="quote">{src}</p>;
    }

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Formats FB responses to display on screen
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    formatFbSrc = (src) => {
        src = src.split('�')
                  .join('')
                  .replace('-', ':')
                  .split(':');
        return (
            <div className="social-quote">
                <span>{src[0]}</span>
                <p>"{src[1]}"</p>
            </div>
        );
    }

    // Retweet of :  https://twitter.com/NathanBenefield/status/941425942592983040

    render() {
        let src = this.props.candidate.source;
        if(src.includes('twitter.com')) {
            if(src.includes('Retweet')) {
                src = src.slice(src.indexOf('http'));
            }
            src =   (<Link to={src} target="_blank">
                        <span className="aria-hidden" aria-hidden="false">Navigate to {this.props.candidate.firstName} {this.props.candidate.lastName}'s twitter source</span>
                        <TwitterIcon className="source-icon twitter"/>
                    </Link>);
        } else if(src.includes('facebook.com')) {
            src =   (<Link to={src} target="_blank">
                        <span className="aria-hidden" aria-hidden="false">Navigate to {this.props.candidate.firstName} {this.props.candidate.lastName}'s facebook source</span>
                        <FacebookIcon className="source-icon fb"/>
                    </Link>);
        } else if(src.includes('imgur.com')) {
            src =   (<Link to={src} target="_blank">
                        <span className="aria-hidden" aria-hidden="false">Navigate to {this.props.candidate.firstName} {this.props.candidate.lastName}'s imgur source</span>
                        <ImgurIcon className="source-icon imgur"/>
                    </Link>);
        } else if(src.startsWith('http')) {
            src =   (<Link to={src} target="_blank">
                        <span className="aria-hidden" aria-hidden="false">Navigate to {this.props.candidate.firstName} {this.props.candidate.lastName}'s external source</span>
                        <LinkIcon className="source-icon link"/>
                    </Link>);
        } else if(src.includes('Facebook post') || src.includes('Facebook message') || src.includes('Facebook reponse') || src.includes('Facebook response')) {
            src = this.formatFbSrc(src);
        } else if(src.includes('Email') || src.includes('email') || src.includes('response')) {
            src = this.formatEmailSrc(src);
        } 
        return(
            <div className={`candidate-source ${this.state.classes}`}>
                <h3>{this.props.candidate.firstName} {this.props.candidate.lastName}</h3>
                {src}
            </div>
        );
    }
} 

