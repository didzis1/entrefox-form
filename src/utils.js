import React from 'react'

import Radio from './components/typeComponents/Radio'
import Range from './components/typeComponents/Range'
import Text from './components/typeComponents/Text'
import DateField from './components/typeComponents/DateField'

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


export default typeComponent