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
            <figure>
                <span>Presented by</span>
                <Link to="https://www.thinkful.com/" target="_blank" >
                    <span className="aria-hidden" aria-hidden="false">Navigate to Thinkful.com</span>
                    <ThinkfulLogo />
                </Link>
            </figure>
        </div>
    );   
}