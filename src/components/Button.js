import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, handleVisibility, currentPage }) => {

	if (currentPage === 0 && text === 'Edellinen') {
		return null
	}

	return (
		<button onClick={handleVisibility}>{text}</button>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	handleVisibility: PropTypes.func,
	currentPage: PropTypes.number
}

export default Button