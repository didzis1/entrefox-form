import React, { useState } from 'react'
import Parts from './components/Parts'
import Button from './components/Button'



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

	return (
		<div>
			<form>
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
