import React from 'react'
import PropTypes from 'prop-types'

const DateField = ({ question }) => {
	// console.log(question)
	// Jos klikkaa "En tiedä tarkkaa päivämäärää", kalenterin täytyy tyhjentää arvot
	return (
		<div>
			<input type='date' name={question.ID} />
			<label>En tiedä tarkkaa päivämäärää</label>
			<input type='checkbox'/>
		</div>
	)
}

DateField.propTypes = {
	question: PropTypes.object
}

export default DateField