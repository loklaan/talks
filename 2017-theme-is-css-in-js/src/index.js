/* eslint import/no-webpack-loader-syntax: off */

import 'prismjs';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/themes/prism-tomorrow.css';

import React from 'react';
import { render } from "react-dom";

import Presentation from "./presentation";
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');

render(<Presentation/>, root);

if (module.hot) {
  if (module.hot) {
    module.hot.accept();
  }
}

registerServiceWorker();
