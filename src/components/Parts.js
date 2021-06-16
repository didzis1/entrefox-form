import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../contexts/FormContext'

import Question from './Question'

// Material UI
import Box from '@material-ui/core/Box'

const Parts = ({ questionSets }) => {
	// Return each part of the questions in their own div
	const { currentPage } = useForm()
	return (
		<Box>
			{questionSets.map((part) => (
				<div
					// Part is hidden if the currentPage is not the same as the part ID
					style={{ display: currentPage === part.ID ? '' : 'none' }}
					key={part.ID}
					id={part.ID}>
					{/*part -> helps defining the page that the question is on*/}
					<Question questions={part.questions} page={part.ID} />
				</div>
			))}
		</Box>
	)
}

Parts.propTypes = {
	questionSets: PropTypes.array
}

export default Parts
