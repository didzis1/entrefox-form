import React from 'react'
import Question from './Question'
import PropTypes from 'prop-types'
import questionSets from '../data/questions.json'

const Parts = ({ currentPage }) => {
	console.log(currentPage)

	return (
		<div>
			{questionSets.map((part) => (
				<div key={part.ID} id={part.ID}>
					<Question questions={part.questions} />
				</div>
			))}
		</div>
	)
}

Parts.propTypes = {
	currentPage: PropTypes.number
}


export default Parts