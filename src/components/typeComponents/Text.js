import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ question }) => {
	if (question.fields) {
		console.log(question.ID[0])
		return (
			<>
				{question.fields.map((field) => (
					<div key={field.ID}>
						<label>{field.text}</label>
						<input type="text" name={question.ID[field.ID]} />
					</div>
				))}
			</>
		)
	}

	return (
		<div>
			<input type="text" name={question.ID} />
		</div>
	)
}

Text.propTypes = {
	question: PropTypes.object
}

export default Text