import React, { Component } from 'react';
import Wallet from '../../components/Wallet';
import amendBalance from '../../core/AmendBalance';

// @Flow

type Props = {
  loading: boolean,
  value: number,
  setBalance: (data: {newBalance: number, overdraft: boolean}) => void,
};

class WalletMain extends Component<Props> {
  constructor(props) {
    super(props)
    // this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick = ({ value, action }) => {
    console.log('arse', this.props)
    amendBalance(value, action)
    .then(
      msg => {this.props.setBalance(msg)},
      e => {console.log(e)}
    );
  }

  render() {
    return <Wallet 
      loading={this.props.loading} 
      value={this.props.value} 
      onClick={(o) => this.handleOnClick(o)}
    />
  }
}

WalletMain.defaultProps = {
  loading: false,
  value: 0,
}

export default WalletMain;