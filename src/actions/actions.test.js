import { setWallet, setBalance, SET_WALLET, SET_BALANCE } from './actions';

describe('Actions', () => {
	test('Returns an object on setWallet', () => 
		expect(setWallet({ balance: 4, name: 'Matt' })).toEqual({ type: SET_WALLET, payload: { balance: 4, name: 'Matt' }})
	)
	test('Returns an object on setBalance', () => 
		expect(setBalance({ newBalance: 5, overdraft: true })).toEqual({ type: SET_BALANCE, payload: { newBalance: 5, overdraft: true }})
	)
})