// // // // // // // // // // // // // // // //
//
//      Requires 1) jest-localstorage-mock
//               2) mq-polyfill
//
// // // // // // // // // // // // // // //


require("jest-localstorage-mock");

import matchMediaPolyfill from 'mq-polyfill';
matchMediaPolyfill(window);
