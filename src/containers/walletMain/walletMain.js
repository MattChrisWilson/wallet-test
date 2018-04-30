import { connect } from 'react-redux';
import WalletMain from '../../scenes/WalletMain';
import { setBalance } from '../../actions';

const mapStateToProps = state => {
  return {
    loading: state.loading,
    value: state.balance,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	setBalance: (data) => dispatch(setBalance(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WalletMain);