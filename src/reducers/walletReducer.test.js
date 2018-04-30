import walletReducer from './walletReducer';
import { SET_WALLET, SET_BALANCE } from '../actions';

describe('walletReducer', () => {
  const defaultState = {
    loading: true,
    name: '',
    balance: 0,
    overdraft: false,
  }

  test('Initialises with defaultState', () => 
    expect(walletReducer(defaultState, {})).toEqual(defaultState)
  )

  test('SetWallet returns a new state with a name, value, loading value, and overdraft value', () => 
    expect(walletReducer(defaultState, { type: SET_WALLET, payload: { balance: 5, name: 'Matt' }})).toEqual({ balance: 5, name: 'Matt', overdraft: false, loading: false })
  )

  test('SetBalance returns a new state with a balance and overdraft', () => 
    expect(walletReducer(defaultState, { type: SET_BALANCE, payload: { newBalance: -5, overdraft: true }})).toEqual({ balance: -5, name: '', overdraft: true, loading: false })
  )
})