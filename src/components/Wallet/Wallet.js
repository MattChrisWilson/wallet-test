import React, { Fragment } from 'react';

// @Flow

type Props = {
  loading: boolean,
  value: number,
};

const Wallet = (props: Props) => (props.loading) ? 
  <div>Please wait</div> : 
  <div>
    &pound;{props.value.toFixed(2)} 
    {
      props.onClick ? 
      <Fragment>
        <button onClick={() => props.onClick({ value: props.value, action: 'inc' })}>+</button>
        <button onClick={() => props.onClick({ value: props.value, action: 'dec' })}>-</button>
      </Fragment> :
      ''
    }
  </div>;

Wallet.defaultProps = {
	loading: false,
	value: 0,
}

export default Wallet;