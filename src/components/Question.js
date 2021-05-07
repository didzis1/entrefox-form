import React from 'react'
import PropTypes from 'prop-types'

import Radio from './typeComponents/Radio'
import Range from './typeComponents/Range'
import Text from './typeComponents/Text'
import DateField from './typeComponents/DateField'




const Question = ({ questions }) => {
	// console.log(questions)

	const typeComponent = (question) => {
		switch (question.type) {
		case 'radio':
			return <Radio
				question={question}
			/>
		case 'range':
			return <Range
				question={question}
			/>
		case 'text':
			return <Text
				question={question}
			/>
		case 'date':
			return <DateField
				question={question}
			/>
		default:
			throw new Error('Type not found...')
		}
	}

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