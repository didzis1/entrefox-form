import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, handlePagination, page, validated }) => {

	if (page === 1 && text === 'Edellinen') {
		return null
	}

	// Styling for buttons (last button is yellow)
	let btn
	if (text === 'Olen valmis') {
		btn = 'bg-yellow-600 hover:bg-yellow-600 focus:ring-yellow-400 active:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg tracking-wider shadow-md focus:outline-none focus:ring focus:ring-offset-2 focus:ring-opacity-70'
	} else {
		btn = 'bg-green-500 hover:bg-green-600 focus:ring-green-400 active:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg tracking-wider shadow-md focus:outline-none focus:ring focus:ring-offset-2 focus:ring-opacity-70'
	}

	return (
		<button
			className={btn}
			onClick={handlePagination}
			disabled={validated}>
			{text}
		</button>
	)
}


Button.propTypes = {
	text: PropTypes.string,
	handlePagination: PropTypes.func,
	page: PropTypes.number,
	validated: PropTypes.bool
}

export default Button