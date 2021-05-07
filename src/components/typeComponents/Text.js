import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ question }) => {
	if (question.fields) {
		return (
			<>
				{question.fields.map((field) => (
					<div key={field.ID}>
						<label>{field.text}</label>
						<input type="text" name={question.ID[field.ID]} className="text-field" />
					</div>
				))}
			</>
		)
	}

	return (
		<div>
			<input type="text" name={question.ID} className="text-box" />
		</div>
	)
}

Text.propTypes = {
	question: PropTypes.object
}

export default Text