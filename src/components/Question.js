import React from 'react'
import PropTypes from 'prop-types'
import typeComponent from '../utils'

const Question = ({ questions }) => {

	return (
		<>
			{
				questions.map((question) => (
					<div key={question.ID} className="pb-3">
						<p className="font-semibold">{question.title}</p>
						{ question.description && <i>{question.description}</i> }
						{typeComponent(question)}
					</div>
				))
			}
		</>
	)
}

Question.propTypes = {
	questions: PropTypes.array
}

export default Question