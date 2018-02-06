import React from 'react';
import { Link } from 'react-router-dom';

import { PUBLIC_URL } from 'config';

export default function TwitterShareBtn(props) {
  const url = encodeURIComponent(PUBLIC_URL);

  return (
    <Link
      className="twitter-share-button"
      target="_blank"
      to={`https://twitter.com/intent/tweet?url=${url}`}
    >
      Tweet
    </Link>
  );
}
