import React, { Component } from 'react';
import { connect } from 'react-redux';

import FacebookShareBtn from './facebook-share';
import TwitterShareBtn  from './twitter-share';
import LinkedinShareBtn from './linkedin-share';

export class SocialShareButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeIn: ''
        };
    }


    render() {
        return(
            <div className={`social-share-btns ${this.props.className}`}>
                <ul>
                    <li><FacebookShareBtn /></li>
                    <li><TwitterShareBtn  /></li>
                    <li><LinkedinShareBtn /></li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.display.loading
});

export default connect(mapStateToProps)(SocialShareButtons);