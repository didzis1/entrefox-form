import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, handleVisibility, page }) => {
	console.log(page)
	if (page === 1 && text === 'Edellinen') {
		return null
	}

	return (
		<button onClick={handleVisibility}>{text}</button>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	handleVisibility: PropTypes.func,
	page: PropTypes.number
}

export default Button