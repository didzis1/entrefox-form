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
	const allAnswers = useSelector(state => state.answers)

	const handleNextPage = () => {
		// console.log('works next')
		if (allAnswers[1] === 'Ei' && currentPage === 1) {
			return dispatch(skipIncrement())
		}
		return dispatch(increment())
	}

	const handlePreviousPage = () => {
		// console.log('works previous')
		if (allAnswers[1] === 'Ei' && currentPage === 3) {
			return dispatch(skipDecrement())
		}
		return dispatch(decrement())
	}


	const displaySummary = () => {
		console.log('Summary displayed')
		console.log(allAnswers)
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
		<div className="pb-12">
			<div className="p-5 bg-yellow-50 bg-opacity-90 border border-gray-200 mx-auto rounded-2xl shadow-2xl mt-10 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl 2xl:max-w-4xl">
				<h1 className="text-center text-3xl pt-6 pb-6 font-semibold tracking-wide uppercase">
					Yrittäjän kehityskeskustelu
				</h1>
				<div className="pt-4">
					<form onSubmit={displaySummary}>
						<Parts
							questionSets={questionSets}
							page={currentPage}
						/>
					</form>
					<div className="space-x-3">
						<Button
							text='Edellinen'
							handlePagination={handlePreviousPage}
							page={currentPage}
						/>
						{ handleNextButton() }
					</div>
				</div>
			</div>
		</div>
	)
}


export default App
