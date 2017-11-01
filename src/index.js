import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import reducer from './reducer/reducer';
import App from './components/App';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('app'));