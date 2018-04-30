import { SET_WALLET, SET_BALANCE } from '../actions';

const defaultState = {
  loading: true,
  name: '',
  balance: 0,
  overdraft: false,
}

const walletReducer = (state = { ...defaultState }, action) => {
  switch(action.type) {
    case SET_WALLET:
      return { ...state, loading: false, ...action.payload, overdraft: action.payload.balance < 0 }
    case SET_BALANCE:
      return { ...state, loading: false, balance: action.payload.newBalance, overdraft: action.payload.overdraft }
    default:
      return state;
  }
}

export default walletReducer;