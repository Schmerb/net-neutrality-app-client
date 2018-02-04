import React from 'react';
import { Link } from 'react-router-dom';

export default function TwitterShareBtn(props) {
    return(
        <Link className="twitter-share-button"
            target="_blank"
            to="https://twitter.com/intent/tweet?url=https%3A%2F%2Fnet-neutrality.netlify.com%2F">
        Tweet</Link>
    );
}