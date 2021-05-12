import React from 'react'
import Question from './Question'
import PropTypes from 'prop-types'
import questionSets from '../data/questions.json'


const Parts = ({ page }) => {
	console.log(page)
	return (
		<div>
			{questionSets.map((part) => (
				<div style={{ display: page === part.ID ? '' : 'none' }}  key={part.ID} id={part.ID}>
					<Question questions={part.questions} />
				</div>
			))}
		</div>
	)
}

Parts.propTypes = {
	page: PropTypes.number
}


export default Parts