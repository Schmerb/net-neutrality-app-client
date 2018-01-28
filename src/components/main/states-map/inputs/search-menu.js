import React, { Component } from 'react';

import ArrowDown from 'icons/arrow-down';

export default class SearchMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return(
            <form className="search-form" action="#!">
                <input type="text" placeholder="Search by State"/>
            </form>
        );
    }
}