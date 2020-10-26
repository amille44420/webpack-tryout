import React from 'react';
import { render } from 'react-dom';

const App = require(`./App.${appConfig.appComponent}`).default;

const node = document.createElement('div');

document.body.appendChild(node);

render(<App/>, node);
