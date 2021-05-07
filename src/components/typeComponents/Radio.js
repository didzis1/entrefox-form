import React from 'react'
import PropTypes from 'prop-types'

const Radio = ({ question }) => {

	return (
		<>
			{
				question.choices.map((choice) => (
					<div key={choice.ID}>
						<label>{choice.text}</label>
						<input type='radio' name={question.ID}/>
					</div>
				))
			}
		</>
	)
}

Radio.propTypes = {
	question: PropTypes.object
}

export default Radio