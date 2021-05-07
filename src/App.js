import React from 'react'
import Parts from './components/Parts'
import Button from './components/Button'
import Summary from './components/Summary'

import { useDispatch } from 'react-redux'
import { increment, decrement } from './reducers/pageCountReducer'


const App = () => {
	// const [currentPage, setCurrentPage] = useState(1)
	//const [answers, setAnswers] = useState({})
	const dispatch = useDispatch()


	// Jos kysymykseen ID 1 on vastattu logiikka buttoneihi (skippaa partit)
	const handleNextPage = () => {
		console.log('works next')
		dispatch(increment())
	}

	const handlePreviousPage = () => {
		console.log('works previous')
		dispatch(decrement())
	}

	const displaySummary = () => {
		console.log('Summary displayed')
		return <Summary />
	}

	// const handleInputChange = (event) => {
	// 	const inputField = {
	// 		'id': event.target.name,
	// 		'value': event.target.value
	// 	}
	// 	if (answers.find(answer => answer['id'] === inputField['id'])) {
	// 		const newAnswer = answers.map((answer) => answer['id'] === inputField['id'] ? inputField : answer)
	// 		setAnswers(newAnswer)
	// 	} else {
	// 		setAnswers(answers.concat(inputField))
	// 	}
	// }

	// Fix label id's to point to corresponding input!
	// Handle -> save (redux. react state) -> page flip
	return (
		<div>
			<form onSubmit={displaySummary}>
				<Parts />
			</form>
			<Button
				text='Edellinen'
				handleVisibility={handlePreviousPage}
			/>
			<Button
				text='Seuraava'
				handleVisibility={handleNextPage}
			/>
		</div>
	)
}


export default App
