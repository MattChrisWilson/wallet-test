import amendBalance from '../../core/amendBalance';

describe('amendBalance()', () => {
	test('Rejects if no variables passed', () => 
		expect(amendBalance()).rejects.toEqual({data: {total: undefined}, msg: "A valid number was not passed"})
	)
	test('Rejects if a non-numeric value is passed', () => 
		expect(amendBalance('x')).rejects.toEqual({data: {total: 'x'}, msg: "A valid number was not passed"})
	)
	test('Increments if a positive number but no direction is passed', () => 
		expect(amendBalance(1)).resolves.toEqual({ newBalance: 2, overdraft: false })
	)
	test('Decrements if a positive number and "dec" is passed', () => 
		expect(amendBalance(1, 'dec')).resolves.toEqual({ newBalance: 0, overdraft: false })
	)
	test('Sets overdraft to true if the new value is below zero', () => 
		expect(amendBalance(0, 'dec')).resolves.toEqual({ newBalance: -1, overdraft: true })
	)
	test('Removes overdraft if the new value goes from below zero to zero or above', () => 
		expect(amendBalance(-1, 'inc')).resolves.toEqual({ newBalance: 0, overdraft: false })
	)
})