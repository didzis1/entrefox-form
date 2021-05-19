import React from 'react'
import PropTypes from 'prop-types'
import typeComponent from '../utils'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
//import Container from '@material-ui/core/'

const Question = ({ questions }) => {

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
						{typeComponent(question)}
					</Box>
				))
			}
		</>
	)
}

Question.propTypes = {
	questions: PropTypes.array
}

export default Question