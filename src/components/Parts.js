import React from 'react'
import Question from './Question'
import PropTypes from 'prop-types'


const Parts = ({ page, questionSets }) => {

	return (
		<div>
			{questionSets.map((part, index) => (
				<div style={{ display: page === part.ID ? '' : 'none' }}  key={part.ID} id={part.ID}>
					<Question questions={part.questions} index={index+1} />
				</div>
			))}
		</div>
	)
}

Parts.propTypes = {
	page: PropTypes.number,
	questionSets: PropTypes.array
}


export default Parts