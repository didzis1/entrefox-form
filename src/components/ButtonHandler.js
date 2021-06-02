import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../contexts/FormContext'

// Material UI
import Button from '@material-ui/core/Button'
import useStyles from '../styles'

const ButtonHandler = ({ text, handlePagination, questionSets }) => {
	const styles = useStyles()
	const { formData, currentPage } = useForm()

	// Validation logic for input, if questionSets isn't defined ('Edellinen' button), returns false
	// If validated returns true, 'Seuraava' or 'Olen valmis' button is disabled
	const validated = () => {
		if (!questionSets) return false

		const questionAmount = questionSets.find(
			(page) => page.ID === currentPage
		).questions.length
		let answeredQuestions = 0

		// Loop over each answer in the page and count the answered questions
		formData
			.find((answersPage) => answersPage.page === currentPage)
			?.answers.forEach((answer) => {
				if (answer.value) {
					answeredQuestions++
				}
			})
		// If answers are equal to or bigger than questions take off disabled button
		return !(questionAmount <= answeredQuestions)
	}
	return (
		<Button
			onClick={handlePagination}
			type='button'
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
