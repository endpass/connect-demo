import React from 'react';
import ReactDOM from 'react-dom';
import e2eWorker from './utils/e2eWorker';
import App from './App';
import './main.css';

if (process.env.NODE_ENV === 'e2e-connect') {
  e2eWorker();
}

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
