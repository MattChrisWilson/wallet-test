import React, { Fragment } from 'react';

// @Flow

type Props = {
  loading: boolean,
  value: number,
};

const Wallet = (props: Props) => (props.loading) ? 
  <div>Please wait</div> : 
  <div>
    <div className={'smallFixed'}>&pound;{props.value.toFixed(2)}</div>
    {
      props.onClick ? 
      <Fragment>
        <button key={'inc-button'} className={'button blue invert noBorder rounded'} onClick={() => props.onClick({ value: props.value, action: 'inc' })}>+</button>
        <button key={'dec-button'} className={'button blue invert noBorder rounded'} onClick={() => props.onClick({ value: props.value, action: 'dec' })}>-</button>
      </Fragment> :
      ''
    }
  </div>;

Wallet.defaultProps = {
	loading: false,
	value: 0,
}

export default Wallet;