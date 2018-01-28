import React from 'react';

import ArrowDown from 'icons/arrow-down';

export default function DropDownMenu(props) {
    return(
        <form className="select-form" action="#!">
            <ArrowDown className="arrow-down"/>
            <label htmlFor="state-select-dropdown" className="aria-hidden" aria-hidden="true">Select a state</label>
            <select id="state-select-dropdown" className="select-box" value={props.currentState}  
                                                onChange={props.handleSelect}>
                <option value="select-state">Select State</option>
                {props.options}
            </select>
        </form>
    );
}