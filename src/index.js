import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import walletReducer from './reducers/walletReducer';
import { setWallet } from './actions';
import WalletMain from './containers/walletMain';

const store = createStore(walletReducer);

ReactDom.render(<Provider store={store}><WalletMain /></Provider>, document.getElementById('root'));