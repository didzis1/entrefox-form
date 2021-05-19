import React from 'react'

import RadioButton from './components/typeComponents/RadioButton'
import Range from './components/typeComponents/Range'
import Text from './components/typeComponents/Text'
import DateField from './components/typeComponents/DateField'

const typeComponent = (question, inputValidation) => {
	switch (question.type) {
	case 'radio':
		return <RadioButton
			question={question}
			inputValidation={inputValidation}
		/>
	case 'range':
		return <Range
			question={question}
			inputValidation={inputValidation}
		/>
	case 'text':
		return <Text
			question={question}
			inputValidation={inputValidation}
		/>
	case 'date':
		return <DateField
			question={question}
			inputValidation={inputValidation}
		/>
	default:
		throw new Error('Type not found...')
	}
}


export default typeComponent