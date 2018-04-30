export const SET_WALLET = 'SET_WALLET';
export const SET_BALANCE = 'SET_BALANCE';

export const setWallet = (data) => {return { type: SET_WALLET, payload: data }};
export const setBalance = (data) => {return { type: SET_BALANCE, payload: data }};