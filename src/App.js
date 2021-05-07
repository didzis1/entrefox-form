import React, { useState } from 'react'
import Parts from './components/Parts'
import Button from './components/Button'

import Summary from './components/Summary'


const App = () => {

	const [currentPage, setCurrentPage] = useState(1)
	//const [answers, setAnswers] = useState({})


	// Jos kysymykseen ID 1 on vastattu logiikka buttoneihi (skippaa partit)
	const handleNextPage = () => {
		console.log('works next')
		setCurrentPage(currentPage + 1)
	}

	const handlePreviousPage = () => {
		console.log('works previous')
		setCurrentPage(currentPage - 1)
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
				<Parts currentPage={currentPage} />
			</form>
			<Button
				text='Edellinen'
				handleVisibility={handlePreviousPage}
				currentPage={currentPage}
			/>
			<Button
				text='Seuraava'
				handleVisibility={handleNextPage}
				currentPage={currentPage}
			/>
		</div>
	)
}


export default App
