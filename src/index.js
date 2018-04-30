import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import walletReducer from './reducers/walletReducer';
import { setWallet } from './actions';

const store = createStore(walletReducer);

ReactDom.render(<div>Test</div>, document.getElementById('root'));