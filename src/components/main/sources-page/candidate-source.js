// // // // // // // // // //
//
//   Candidate Source
//
// // // // // // // // // //

import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TwitterIcon  from 'icons/social/twitter-icon';
import FacebookIcon from 'icons/social/facebook-icon';
import ImgurIcon    from 'icons/social/imgur-icon';
import LinkIcon     from 'icons/link-icon';

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Formats email responses to display on screen
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function formatEmailSrc(src) {
    src = src.split('�')
              .join('')
              .replace('Email response: ', '')
              .replace('Email response:', '');
    src = `"${src}"`;
    return <p className="quote">{src}</p>;
}
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Formats email responses to display on screen
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function formatFbSrc(src) {
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

export default function CandidateSource(props) {
    let src = props.candidate.source;
    if(src.includes('twitter.com')) {
        src =   (<Link to={src} target="_blank">
                    <span className="aria-hidden" aria-hidden="false">Navigate to {props.candidate.firstName} {props.candidate.lastName}'s twitter source</span>
                    <TwitterIcon className="source-icon twitter"/>
                </Link>);
    } else if(src.includes('facebook.com')) {
        src =   (<Link to={src} target="_blank">
                    <span className="aria-hidden" aria-hidden="false">Navigate to {props.candidate.firstName} {props.candidate.lastName}'s facebook source</span>
                    <FacebookIcon className="source-icon fb"/>
                </Link>);
    } else if(src.includes('imgur.com')) {
        src =   (<Link to={src} target="_blank">
                    <span className="aria-hidden" aria-hidden="false">Navigate to {props.candidate.firstName} {props.candidate.lastName}'s imgur source</span>
                    <ImgurIcon className="source-icon imgur"/>
                </Link>);
    } else if(src.startsWith('http')) {
        src =   (<Link to={src} target="_blank">
                    <span className="aria-hidden" aria-hidden="false">Navigate to {props.candidate.firstName} {props.candidate.lastName}'s external source</span>
                    <LinkIcon className="source-icon link"/>
                </Link>);
    } else if(src.includes('Email') || src.includes('email') || src.includes('response')) {
        src = formatEmailSrc(src);
    } else if(src.includes('Facebook post') || src.includes('Facebook message') || src.includes('Facebook reponse')) {
        src = formatFbSrc(src);
    }
    return(
        <div className="candidate-source">
            <h3>{props.candidate.firstName} {props.candidate.lastName}</h3>
            {src}
        </div>
    );
} 

