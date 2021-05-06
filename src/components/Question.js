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
		case 'multiple-text':
			return 'hello'
		default:
			throw new Error('Type not found...')
		}
	}

	return (
		<>
			{
				questions.map((question) => (
					<div key={question.ID}>
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