import React, { useState, useEffect } from 'react'
import Parts from './components/Parts'
import ButtonHandler from './components/ButtonHandler'
import Summary from './components/Summary'
import ProgressBar from './components/ProgressBar'
import questionSets from './data/questions.json'

import { useDispatch, useSelector } from 'react-redux'
import { increment, skipIncrement, decrement, skipDecrement } from './reducers/pageCountReducer'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import useStyles from './styles'


const App = () => {
	// React state
	const [formSubmitted, setFormSubmitted] = useState(false)

	const dispatch = useDispatch()
	const classes = useStyles()

	// Redux store state
	const currentPage = useSelector(state => state.currentPage)
	const allAnswers = useSelector(state => state.answers)

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}, [ currentPage ])

	const handleNextPage = () => {
		// console.log('works next')
		if (allAnswers[1] === 'En' && currentPage === 1) {
			return dispatch(skipIncrement())
		}
		return dispatch(increment())
	}

	const handlePreviousPage = () => {
		// console.log('works previous')
		if (allAnswers[1] === 'En' && currentPage === 3) {
			return dispatch(skipDecrement())
		}
		return dispatch(decrement())
	}


	const displaySummary = () => {
		console.log('Summary displayed')
		setFormSubmitted(true)
		console.log(formSubmitted)
		console.log(allAnswers)
		return <Summary />
	}

	const handlePreviousButton = () => {
		if (currentPage === 1) {
			return null
		} else {
			return (
				<ButtonHandler
					text='Edellinen'
					handlePagination={handlePreviousPage}
				/>
			)
		}
	}

	const handleNextButton = () => {
		if (questionSets.length === currentPage) {
			return (
				<ButtonHandler
					text='Olen valmis'
					handlePagination={displaySummary}
				/>
			)
		} else {
			return (
				<ButtonHandler
					text='Seuraava'
					handlePagination={handleNextPage}
				/>
			)
		}
	}

	return (
		<Container
			className={classes.survey}
			maxWidth='md'
		>
			<Typography
				variant='h4'
				component='h1'
				align='center'
				gutterBottom
			>
			Yrittäjän kehityskeskustelu
			</Typography>
			<Box pt={2} pb={4} px={3} className={classes.form}>
				<form onSubmit={displaySummary}>
					<Parts
						questionSets={questionSets}
						page={currentPage}
					/>
				</form>
			</Box>

			{/* Buttons in a grid */}
			<Grid
				container
				direction='row'
				justify='space-between'
			>
				<Grid item>
					{ handlePreviousButton() }
				</Grid>
				<Grid item>
					{ handleNextButton() }
				</Grid>
			</Grid>
			<Box m='auto'>
				<ProgressBar
					currentPage={currentPage}
				/>
			</Box>
		</Container>
	)
}


export default App
