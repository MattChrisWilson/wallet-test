import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wallet from './Wallet';

configure({ adapter: new Adapter() });

const setup = (setupProps = {}) => {
	const defaultProps = {
		loading: false,
		value: 0,
	};

	const props = { ...defaultProps, ...setupProps };

	const comp = shallow(
		<Wallet loading={props.loading} value={props.value} onClick={props.onClick} />
	);

	return { props, comp };
}

describe('Wallet', () => {
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

  test('Renders buttons when onClick is passed', () => {
    const { comp } = setup({ onClick: jest.fn() });
    expect(comp).toMatchSnapshot();
  });

  test('calls onClick() on click', () => {
    const { props, comp } = setup({ onClick: jest.fn() });

    const link = comp.find('button').at(0);
    link.simulate('click');

    expect(props.onClick).toBeCalled();
  });
});