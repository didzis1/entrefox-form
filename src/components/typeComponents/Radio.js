import React from 'react'
import PropTypes from 'prop-types'

const Radio = ({ question }) => {

	return (
		<div>
			<h3>{question.title}</h3>
			{ question.description && <small>{question.description}</small> }
			{
				question.choices.map((choice) => (
					<div key={choice.ID}>
						<label>{choice.text}</label>
						<input type='radio' name={question.ID}/>
					</div>
				))
			}
		</div>
	)
}

Radio.propTypes = {
	question: PropTypes.object
}

export default Radio