import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/normalize.css';
import './css/skeleton.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
