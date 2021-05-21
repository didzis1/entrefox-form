import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	increment,
	skipIncrement,
	decrement,
	skipDecrement
} from './reducers/pageCountReducer'

import Survey from './components/Survey'
import Summary from './components/Summary'
import questionSets from './data/questions.json'
import { getAnswerByID } from './utils'

const App = () => {
	// React state
	const [formSubmitted, setFormSubmitted] = useState(false)

	const dispatch = useDispatch()

	// Redux store state
	const currentPage = useSelector((state) => state.currentPage)
	const answers = useSelector((state) => state.answers)

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}, [currentPage])

	const handleNextPage = () => {
		// Gets the first question of the first page (Have you done this survey before)
		if (getAnswerByID(answers, 1, 1) === 'En' && currentPage === 1) {
			return dispatch(skipIncrement())
		}
		return dispatch(increment())
	}

	const handlePreviousPage = () => {
		// Gets the first question of the first page (Have you done this survey before)
		if (getAnswerByID(answers, 1, 1) === 'En' && currentPage === 3) {
			return dispatch(skipDecrement())
		}
		return dispatch(decrement())
	}

	const handleFormSubmit = () => {
		setFormSubmitted(!formSubmitted)
	}

	if (formSubmitted) {
		return <Summary handleFormSubmit={handleFormSubmit} />
	} else {
		return (
			<Survey
				handleFormSubmit={handleFormSubmit}
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				questionSets={questionSets}
				currentPage={currentPage}
			/>
		)
	}
}

export default App
