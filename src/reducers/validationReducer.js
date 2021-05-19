const reducer = (state = {}, action) => {
	switch (action.type) {
	case 'DISABLE':
		console.log('button disablde')
		return {
			...state,
			[action.data.page]: true
		}
	case 'ENABLE':
		console.log('button enabled')
		return {
			...state,
			[action.data.page]: false
		}
	default:
		return state
	}
}

export const disable = (page) => {
	return {
		type: 'DISABLE',
		data: {
			page: parseInt(page)
		}
	}
}

export const enable = (page) => {
	return {
		type: 'ENABLE',
		data: {
			page: parseInt(page)
		}
	}
}

export default reducer