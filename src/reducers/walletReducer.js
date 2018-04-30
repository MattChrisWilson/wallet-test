import { SET_WALLET, SET_BALANCE } from '../actions';

const defaultState = {
  loading: true,
  name: '',
  balance: 0,
}

const walletReducer = (state = { ...defaultState }, action) => {
  switch(action.type) {
    case SET_WALLET:
      return { ...state, loading: false, ...action.payload }
    case SET_BALANCE:
      return { ...state, balance: action.payload }
    default:
      return state;
  }
}

export default walletReducer;