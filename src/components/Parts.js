import React from 'react'
import Question from './Question'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const Parts = ({ questionSets }) => {
	const currentPage = useSelector((state) => state.currentPage)

	return (
		<div>
			{questionSets.map((part) => (
				<div
					style={{ display: currentPage === part.ID ? '' : 'none' }}
					key={part.ID}
					id={part.ID}>
					{/*part -> helps defining the page that the question is on*/}
					<Question questions={part.questions} />
				</div>
			))}
		</div>
	)
}

Parts.propTypes = {
	questionSets: PropTypes.array
}

export default Parts
