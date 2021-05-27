import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import Button from '@material-ui/core/Button'
import useStyles from '../styles'

const ButtonHandler = ({ text, handlePagination, questionSets }) => {
	const styles = useStyles()

	const answers = useSelector((state) => state.answers)
	const currentPage = useSelector((state) => state.currentPage)

	// Validation logic for input, if questionSets isn't defined ('Edellinen' button), returns false
	const validated = () => {
		if (!questionSets) return false

		const questionAmount = questionSets.find(
			(page) => page.ID === currentPage
		).questions.length
		let answeredQuestions = 0
		const pageAnswers = answers.find(
			(answersPage) => answersPage.page === currentPage
		)
		// Loop over each answer in the page and count the answered questions
		pageAnswers.answers.forEach((answer) => {
			if (answer.value) {
				answeredQuestions = answeredQuestions + 1
			}
		})
		console.log(answeredQuestions)
		// console.log(questionAmount, answerAmount)
		// If answers are equal to or bigger than questions take off disabled button
		return !(questionAmount <= answeredQuestions)
	}
	return (
		<Button
			onClick={handlePagination}
			variant='contained'
			color='primary'
			className={styles.button}
			disabled={validated()}>
			{text}
		</Button>
	)
}

ButtonHandler.propTypes = {
	text: PropTypes.string,
	handlePagination: PropTypes.func,
	questionSets: PropTypes.array
}

export default ButtonHandler
