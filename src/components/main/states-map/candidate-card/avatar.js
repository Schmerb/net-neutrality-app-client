// // // // // // // // // //
//
//   Candidate Avatar
//
// // // // // // // // // //

import React, { Component } from 'react';

import Spinner from 'react-spinkit';

import ProhibitedIcon   from 'icons/prohibited-icon';
import QuestionMarkIcon from 'icons/question-mark';
import RepublicanIcon   from 'icons/party/republican-icon';
import DemocraticIcon   from 'icons/party/democratic-icon';
import LibertarianIcon  from 'icons/party/libertarian-icon';
import IndependentIcon  from 'icons/party/independent-icon';
import GreenPartyIcon   from 'icons/party/green-party-icon';

export default class CandidateAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // returns party icon/logo for party passed in props
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    getPartyIcon = () => {
        switch(this.props.party) {
            case 'Republican':
                return <RepublicanIcon className="party-icon republican"/>;
            case 'Democratic':
                return <DemocraticIcon className="party-icon democratic"/>;
            case 'Libertarian':
                return <LibertarianIcon className="party-icon libertarian"/>;
            case 'Independent':
                return <IndependentIcon className="party-icon independent"/>;
            case 'Green':
                return <GreenPartyIcon className="party-icon green"/>;
            default: 
                return <QuestionMarkIcon className="party-icon question-mark"/>;
        }
    };

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // returns correct prohibited icon with class for either
    // unkown-support or no-support
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    getProhibitedIcon = () => {
        switch(this.props.supports) {
            case 'NO SUPPORT':
                return <ProhibitedIcon className="prohibited-icon"/>
            case 'UNKNOWN':
                return <ProhibitedIcon className="prohibited-icon support"/>
            default:    
                return null;
        }
    };

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Sets loading to false once image has been fully
    // loaded in DOM
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    handleImgLoad = () => {
        this.setState({ loading: false });
    }

    render() {
        const prohibitedIcon = this.getProhibitedIcon();
        const partyIcon      = this.getPartyIcon();
        const img_styles = {
            backgroundImage: `url(${this.props.imageURL})`
        };
        const hidden_img_styles = {
            height: 0,
            opacity: 0
        }
        let spinner = <Spinner overrideSpinnerClassName={`avatar-loading-icon ${this.state.loading ? '':'fadeout'}`} name="ball-pulse-sync" fadeIn="none"/>;
        let avatar  = (<div className="avatar-img" style={img_styles}>
                            {prohibitedIcon}
                       </div>);
        
        return(
            <div className="avatar-wrap">
                <img src={this.props.imageURL} alt="" aria-hidden="true" style={hidden_img_styles} onLoad={this.handleImgLoad}/>
                {!this.state.loading ?  avatar : null}
                {!this.state.loading ?  partyIcon : null}
                {spinner}
            </div>
        );
    }
}