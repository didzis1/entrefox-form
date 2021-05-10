import React from 'react'
import PropTypes from 'prop-types'
import typeComponent from '../utils'

const Question = ({ questions }) => {

	return (
		<>
			{
				questions.map((question) => (
					<div key={question.ID}>
						<h3>{question.title}</h3>
						{ question.description && <small>{question.description}</small> }
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