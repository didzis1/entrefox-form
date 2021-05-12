import React from 'react'
import Parts from './components/Parts'
import Button from './components/Button'
import Summary from './components/Summary'
import questionSets from './data/questions.json'

import { useDispatch, useSelector } from 'react-redux'
import { increment, skipIncrement, decrement, skipDecrement } from './reducers/pageCountReducer'


const App = () => {
	const dispatch = useDispatch()
	const currentPage = useSelector(state => state.currentPage)
	const firstQuestion = useSelector(state => state.answers[1])

	const handleNextPage = () => {
		console.log('works next')
		if (firstQuestion === 'Kyllä') {
			return dispatch(skipIncrement())
		}
		return dispatch(increment())
	}

	const handlePreviousPage = () => {
		console.log('works previous')
		if (firstQuestion === 'Kyllä' && currentPage === 3) {
			return dispatch(skipDecrement())
		}
		return dispatch(decrement())
	}


	const displaySummary = () => {
		console.log('Summary displayed')
		return <Summary />
	}

	const handleNextButton = () => {
		if (questionSets.length === currentPage) {
			return (
				<Button
					text='Olen valmis'
					handlePagination={displaySummary}
					page={currentPage}
				/>
			)
		} else {
			return (
				<Button
					text='Seuraava'
					handlePagination={handleNextPage}
					page={currentPage}
				/>
			)
		}
	}

	return (
		<div>
			<form onSubmit={displaySummary}>
				<Parts
					questionSets={questionSets}
					page={currentPage}
				/>
			</form>
			<Button
				text='Edellinen'
				handlePagination={handlePreviousPage}
				page={currentPage}
			/>
			{ handleNextButton() }
		</div>
	)
}


export default App
