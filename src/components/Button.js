import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, handlePagination, page }) => {
	console.log(page)
	if (page === 1 && text === 'Edellinen') {
		return null
	}

	return (
		<button onClick={handlePagination}>{text}</button>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	handlePagination: PropTypes.func,
	page: PropTypes.number
}

export default Button