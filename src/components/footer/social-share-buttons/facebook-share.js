import React from 'react';

import { PUBLIC_URL } from 'config';

export default function FacebookShareBtn(props) {
  const url = encodeURIComponent(PUBLIC_URL);

  return (
    <iframe
      title="Facebook share button"
      src={`https://www.facebook.com/plugins/share_button.php?href=${url}&layout=button&size=small&mobile_iframe=true&width=59&height=20&appId`}
      width="59"
      height="20"
      scrolling="no"
      frameBorder="0"
    />
  );
}
