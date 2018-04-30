import React, { Component, Fragment } from 'react';
import Wallet from '../../components/Wallet';
import amendBalance from '../../core/AmendBalance';

// @Flow

type Props = {
  loading: boolean,
  value: number,
  overdraft: boolean,
  setBalance: (data: {newBalance: number, overdraft: boolean}) => void,
};

class WalletMain extends Component<Props> {
  handleOnClick = ({ value, action }) => {
    amendBalance(value, action)
    .then(
      msg => {this.props.setBalance(msg)},
      e => {console.log(e)}
    );
  }

  render() {
    return <Fragment>
      <Wallet 
        loading={this.props.loading} 
        value={this.props.value} 
        onClick={(o) => this.handleOnClick(o)}
      />
      {this.props.overdraft ? <div className={'warning invert rounded'}>You're in your overdraft</div> : ''}
    </Fragment>
  }
}

WalletMain.defaultProps = {
  loading: false,
  value: 0,
  overdraft: false,
}

export default WalletMain;