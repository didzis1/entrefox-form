import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../contexts/FormContext'

// Material UI
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core'

const ButtonHandler = ({
	text,
	handlePagination,
	questionSets,
	colors,
	startIcon,
}) => {
	const { formData, currentPage } = useForm()

	const ColorButton = withStyles(() => ({
		root: {
			backgroundColor: colors.bg,
			color: '#000000',
			letterSpacing: '2px',
			'&:hover': {
				color: '#FFFFFF',
				backgroundColor: colors.bgHover,
			},
		},
	}))(Button)

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
		<>
			{validated() ? (
				<small style={{ paddingRight: '10px' }}>
					Jokaiseen kysymykseen tulee vastata
				</small>
			) : (
				''
			)}
			<ColorButton
				onClick={handlePagination}
				type='button'
				variant='contained'
				startIcon={startIcon}
				disabled={validated()}>
				{text}
			</ColorButton>
		</>
	)
}

ButtonHandler.propTypes = {
	text: PropTypes.string,
	handlePagination: PropTypes.func,
	questionSets: PropTypes.array,
	colors: PropTypes.object,
	startIcon: PropTypes.object,
}

export default ButtonHandler
