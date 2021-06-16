import React from 'react'
import PropTypes from 'prop-types'
import typeComponent from '../utils'

// Material UI
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const Question = ({ questions, page }) => {
	// Render all questions on page
	return (
		<>
			{questions.map((question) => (
				<Box key={question.ID} mt={5}>
					<Typography variant='h5'>{question.title}</Typography>
					{question.description && (
						<Box fontStyle='italic' mt={2}>
							<Typography variant='body1'>
								{question.description}
							</Typography>
						</Box>
					)}
					{/* Component is determined based on it's type in typeComponent */}
					{typeComponent({ ...question, page })}
				</Box>
			))}
		</>
	)
}

Question.propTypes = {
	questions: PropTypes.array,
	page: PropTypes.number
}

export default Question
