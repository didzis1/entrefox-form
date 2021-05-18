import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, handlePagination }) => {

	return (
		<button
			className='bg-lime-500 hover:bg-lime-600 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-offset-2 active:bg-lime-400 text-white font-semibold py-2 px-4 rounded-lg tracking-wider shadow-md'
			onClick={handlePagination}>{text}</button>
	)
}


Button.propTypes = {
	text: PropTypes.string,
	handlePagination: PropTypes.func
}

export default Button