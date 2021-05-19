import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, skipIncrement, decrement, skipDecrement } from './reducers/pageCountReducer'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import useStyles from './styles'
import Parts from './components/Parts'
import ButtonHandler from './components/ButtonHandler'
import Summary from './components/Summary'
import ProgressBar from './components/ProgressBar'
import questionSets from './data/questions.json'
import { getAnswerByID } from './utils'

const App = () => {

	// React state
	const [formSubmitted, setFormSubmitted] = useState(false)

	const dispatch = useDispatch()
	const classes = useStyles()

	// Redux store state
	const currentPage = useSelector(state => state.currentPage)
	const answers = useSelector(state => state.answers)

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}, [ currentPage ])

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


	const displaySummary = () => {
		console.log('Summary displayed')
		setFormSubmitted(true)
		console.log(formSubmitted)
		console.log(answers)
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
					questionSets={questionSets}
				/>
			)
		} else {
			return (
				<ButtonHandler
					text='Seuraava'
					handlePagination={handleNextPage}
					questionSets={questionSets}
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
				<ProgressBar/>
			</Box>
		</Container>
	)
}


export default App
