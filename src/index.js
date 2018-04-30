import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import walletReducer from './reducers/walletReducer';
import { setWallet } from './actions';
import Wallet from './components/Wallet';

const store = createStore(walletReducer);

ReactDom.render(<Provider store={store}><Wallet /></Provider>, document.getElementById('root'));