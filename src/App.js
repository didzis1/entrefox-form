import React, { useEffect } from 'react'

import Survey from './components/Survey'
import Summary from './components/Summary'
import questionSets from './data/questions.json'
import { getAnswerByID } from './utils'
import { useForm } from './contexts/FormContext'
import Footer from './components/Footer'

import Box from '@material-ui/core/Box'

const App = () => {
	const { currentPage, setCurrentPage, formSubmitted, setFormSubmitted } =
		useForm()

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}, [currentPage])

	const firstAnswer = getAnswerByID(1, 1)
	const handleNextPage = () => {
		// Gets the first question of the first page (Have you done this survey before)
		firstAnswer === 'En' && currentPage === 1
			? setCurrentPage(currentPage + 2)
			: setCurrentPage(currentPage + 1)
	}

	const handlePreviousPage = () => {
		// Gets the first question of the first page (Have you done this survey before)
		firstAnswer === 'En' && currentPage === 3
			? setCurrentPage(currentPage - 2)
			: setCurrentPage(currentPage - 1)
	}

	const handleFormSubmit = (event) => {
		event.preventDefault()
		setFormSubmitted(!formSubmitted)
	}

	return (
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
	)
}

export default App
