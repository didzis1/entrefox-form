const reducer = (state = 1, action) => {
	switch(action.type) {
	case 'INCREMENT':
		return state + 1
	case 'DECREMENT':
		return state - 1
	case 'SKIP_INCREMENT':
		return state + 2
	case 'SKIP_DECREMENT':
		return state - 2
	default:
		return state
	}
}

export const increment = () => {
	return {
		type: 'INCREMENT'
	}
}

export const skipIncrement = () => {
	return {
		type: 'SKIP_INCREMENT'
	}
}

export const decrement = () => {
	return {
		type: 'DECREMENT'
	}
}

export const skipDecrement = () => {
	return {
		type: 'SKIP_DECREMENT'
	}
}

export default reducer