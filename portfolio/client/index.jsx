import React from 'react';
import ReactDOM from 'react-dom/client';
import $ from 'jquery'

import App from './app'

const root = ReactDOM.createRoot($('#root')[0])
root.render(<App />)
