import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WalletMain from './WalletMain';

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
});