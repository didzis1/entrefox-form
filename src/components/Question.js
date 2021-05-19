import React from 'react'
import PropTypes from 'prop-types'
import typeComponent from '../utils'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
//import Container from '@material-ui/core/'
import { useDispatch, useSelector } from 'react-redux'
import { updateAnswers } from '../reducers/answersReducer'
import { enable, disable } from '../reducers/validationReducer'

const Question = ({ questions, index }) => {
	const dispatch = useDispatch()

	const currentPage = useSelector(state => state.currentPage)
	const answers = useSelector(state => state.answers)
	//const currentPage = useSelector(state => state.currentPage)

	const inputValidation = (id, value) => {

		//console.log(id, value)
		dispatch(updateAnswers(currentPage, id, value))

		const page = answers.find(page => page.page === currentPage)

		if (page) {
			console.log(questions.length, Object.keys(page.answers).length)
			questions.length === Object.keys(page.answers).length ? dispatch(enable(currentPage)) : dispatch(disable(currentPage))
		} else {
			questions.length === 1 ? dispatch(disable(currentPage)) : dispatch(enable(currentPage))
		}

	}

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
						{typeComponent({ ...question, page : index }, inputValidation)}
					</Box>
				))
			}
		</>
	)
}

Question.propTypes = {
	questions: PropTypes.array,
	index: PropTypes.number
}

export default Question