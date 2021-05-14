import React from 'react'
import PropTypes from 'prop-types'
import typeComponent from '../utils'

const Question = ({ questions }) => {

	return (
		<>
			{
				questions.map((question) => (
					<div key={question.ID} className="pb-3">
						<h3 className="font-semibold">{question.title}</h3>
						{ question.description && <small className="italic text-md">{question.description}</small> }
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