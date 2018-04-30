// @Flow

const amendBalance = (total: number, direction?: string) : {newBalance: number, overdraft: boolean} =>
	new Promise((res, rej) => {
		if(Number.isNaN(total*1)) return rej({ msg: `A valid number was not passed`, data: { total }});
		const newBalance = (typeof direction !== 'undefined' && direction === 'dec') ? --total : ++total;
		return res({ newBalance, overdraft: (newBalance < 0) ? true : false });
	})

export default amendBalance;