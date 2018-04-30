import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import walletReducer from './reducers/walletReducer';
import { setWallet } from './actions';
import WalletMain from './containers/walletMain';

const store = createStore(walletReducer);

fetch('https://codepen.io/andismith/pen/oqzxyP.js')
.then(resp => resp.json())
.then(resp => store.dispatch(setWallet(resp)));

ReactDom.render(<Provider store={store}><WalletMain /></Provider>, document.getElementById('root'));