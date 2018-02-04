// // // // // // // // // //
//
//   Candidate Source
//
// // // // // // // // // //

import React, { Component } from 'react';
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
            }, 2150);
        }
    }

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Formats email responses to display on screen
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    formatEmailSrc = (src) => {
        src = src.trim()
                 .replace(/�/g, '')
                 .replace('Email response: ', '')
                 .replace('Email response:', '');
        src = `"${src}"`;
        return <p className="quote">{src}</p>;
    }

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Formats FB responses to display on screen
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    formatFbSrc = (src) => {
        // console.log(src);
        src = src.trim()
                 .replace(/�/g, '')
                 .replace('Facebook response:', '');
        return (
            <div className="social-quote">
                <p>{src}</p>
            </div>
        );
    }

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Parses source and applies appropriate 3rd party
    // icon
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    getProperSrcFormat() {
        let src = this.props.candidate.source.trim();
        let hasIcon  = false, 
            hasQuote = true;
        if(src.includes('twitter.com')) {
            src = (<Link to={src} target="_blank">
                        <span className="aria-hidden" aria-hidden="false">Navigate to {this.props.candidate.firstName} {this.props.candidate.lastName}'s twitter source</span>
                        <TwitterIcon className="source-icon twitter"/>
                  </Link>);
            hasIcon  = true;
            hasQuote = false;
        } else if(src.includes('facebook.com')) {
            src =   (<Link to={src} target="_blank">
                        <span className="aria-hidden" aria-hidden="false">Navigate to {this.props.candidate.firstName} {this.props.candidate.lastName}'s facebook source</span>
                        <FacebookIcon className="source-icon fb"/>
                    </Link>);
            hasIcon  = true;
            hasQuote = false;
        } else if(src.includes('imgur.com')) {
            src =   (<Link to={src} target="_blank">
                        <span className="aria-hidden" aria-hidden="false">Navigate to {this.props.candidate.firstName} {this.props.candidate.lastName}'s imgur source</span>
                        <ImgurIcon className="source-icon imgur"/>
                    </Link>);
            hasIcon  = true;
            hasQuote = false;
        } else if(src.startsWith('http')) {
            src =   (<Link to={src} target="_blank">
                        <span className="aria-hidden" aria-hidden="false">Navigate to {this.props.candidate.firstName} {this.props.candidate.lastName}'s external source</span>
                        <LinkIcon className="source-icon link"/>
                    </Link>);
            hasIcon  = true;
            hasQuote = false;
        } else if(src.includes('Facebook post') || src.includes('Facebook message') || src.includes('Facebook response')) {
            src = this.formatFbSrc(src);
        } else if(src.includes('Email response:') || src.includes('Email response')) {
            src = this.formatEmailSrc(src);
        } 
        return { src, hasIcon, hasQuote };
    }

    render() {
        const { src, hasIcon, hasQuote } = this.getProperSrcFormat();
        return(
            <div className={`candidate-source ${this.state.classes} ${hasIcon?'hasIcon':''} ${hasQuote?'hasQuote':''}`}>
                <h3>{this.props.candidate.firstName} {this.props.candidate.lastName}</h3>
                {src}
            </div>
        );
    }
} 

