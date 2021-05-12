import React from 'react'
import Parts from './components/Parts'
import Button from './components/Button'
import Summary from './components/Summary'

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

	return (
		<div>
			<form onSubmit={displaySummary}>
				<Parts
					page={currentPage}
				/>
			</form>
			<Button
				text='Edellinen'
				handleVisibility={handlePreviousPage}
				page={currentPage}
			/>
			<Button
				text='Seuraava'
				handleVisibility={handleNextPage}
				page={currentPage}
			/>
		</div>
	)
}


export default App
