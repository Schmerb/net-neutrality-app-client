import React from 'react';

import { PUBLIC_URL } from 'config';

export default function LinkedinShareBtn(props) {
  return <script type="IN/Share" data-url={PUBLIC_URL} />;
}
