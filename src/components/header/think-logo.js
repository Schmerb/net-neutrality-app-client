// // // // // // // // // //
//
//       Thinkful Logo
//
// // // // // // // // // //

import React    from 'react';
import { Link } from 'react-router-dom';

import ThinkfulLogo from 'icons/thinkful-logo';

export default function ThinkLogo(props) {
    return (
        <div className="think-logo">
            <label>
                <span>Presented by</span>
                <Link to="https://www.thinkful.com/" target="__blank" >
                    <ThinkfulLogo />
                </Link>
            </label>
        </div>
    );   
}