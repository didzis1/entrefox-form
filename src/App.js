import React, { useEffect } from 'react'
import questionSets from './data/questions.json'
import { getAnswerByID } from './utils'
import { useForm } from './contexts/FormContext'

// Components
import Survey from './components/Survey'
import Summary from './components/Summary'
import Footer from './components/Footer'

// Material UI
import Box from '@material-ui/core/Box'
import useStyles from './styles'

const App = () => {
	const { currentPage, setCurrentPage, formSubmitted, setFormSubmitted } =
		useForm()
	const classes = useStyles()

	// Scroll to top when page is changed
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}, [currentPage])

	const firstAnswer = getAnswerByID(1, 1) // First question's value

	const handleNextPage = () => {
		// Check if 'Seuraava' needs to skip one page based on first question's answer
		firstAnswer === 'En' && currentPage === 1
			? setCurrentPage(currentPage + 2)
			: setCurrentPage(currentPage + 1)
	}

	const handlePreviousPage = () => {
		// Check if 'Edellinen' needs to skip one page based on first question's answer
		firstAnswer === 'En' && currentPage === 3
			? setCurrentPage(currentPage - 2)
			: setCurrentPage(currentPage - 1)
	}

	const handleFormSubmit = (event) => {
		event.preventDefault()
		setFormSubmitted(!formSubmitted)
	}

	return (
		<Box className={classes.mainBackground}>
			<Box pt={5}>
				{formSubmitted ? (
					<Summary handleFormSubmit={handleFormSubmit} />
				) : (
					<Survey
						handleFormSubmit={handleFormSubmit}
						handleNextPage={handleNextPage}
						handlePreviousPage={handlePreviousPage}
						questionSets={questionSets}
						currentPage={currentPage}
						formSubmitted={formSubmitted}
					/>
				)}
				<Footer />
			</Box>
		</Box>
	)
}

export default App
