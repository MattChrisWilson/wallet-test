/**
 * @jest-environment jsdom
*/

import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WalletMain from './WalletMain';
import Wallet from '../../components/Wallet';

configure({ adapter: new Adapter() });

const setup = (setupProps = {}) => {
	const defaultProps = {
		loading: false,
		value: 0,
    overdraft: false,
	};

	const props = { ...defaultProps, ...setupProps };

	const comp = shallow(
		<WalletMain loading={props.loading} value={props.value} />
	);

	return { props, comp };
}

describe('WalletMain', () => {
  test('Renders without crashing', () => {
    const { comp } = setup();
    expect(comp).toMatchSnapshot();
  });

  test('Renders loading message when loading is true', () => {
    const { comp } = setup({ loading: true });
    expect(comp).toMatchSnapshot();
  });

  test('Renders value when passed', () => {
    const { comp } = setup({ value: 5 });
    expect(comp).toMatchSnapshot();
  });

  test('Renders overdraft message when passed', () => {
    const { comp } = setup({ value: -5, overdraft: true });
    expect(comp).toMatchSnapshot();
  });

  // test('Renders buttons when onClick is passed', () => {
  //   const setBalance = jest.fn();
  //   const { props, comp } = setupM({ onClick: jest.fn(), setBalance });
  //   const link = comp.find('button').at(0).simulate('click', { value: 4, action: 'inc' })
  //   expect(setBalance).toBeCalled();
  // });
});