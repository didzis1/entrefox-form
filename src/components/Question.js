import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
//import Container from '@material-ui/core/'

import typeComponent from '../utils'

const Question = ({ questions, page }) => {

	return (
		<>
			{
				questions.map((question) => (
					<Box key={question.ID} mt={5} >
						<Typography variant="h5">
							{question.title}
						</Typography>
						{ question.description && (
							<Box fontStyle='italic' mt={2}>
								<Typography variant='body1'>
									{question.description}
								</Typography>
							</Box>
						) }
						{typeComponent({ ...question, page })}
					</Box>
				))
			}
		</>
	)
}

Question.propTypes = {
	questions: PropTypes.array,
	page: PropTypes.number
}

export default Question