import React, { useEffect } from 'react'
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

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { lime, yellow } from '@material-ui/core/colors'
import useStyles from './styles'

const theme = createMuiTheme({
	palette: {
		primary: lime,
		secondary: yellow,
		lightLime: lime[50]
	}
})

const App = () => {
	const dispatch = useDispatch()
	const currentPage = useSelector(state => state.currentPage)
	const allAnswers = useSelector(state => state.answers)
	const classes = useStyles()

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
		<ThemeProvider theme={theme}>
			<Container
				className={classes.survey}
			>
				<Box textAlign="center">
					<Typography
						variant="h4"
						component="h1"
						gutterBottom
					>
					Yrittäjän kehityskeskustelu
					</Typography>
				</Box>
				<hr />
				<Box pt={2} px={2}>
					<form onSubmit={displaySummary}>
						<Parts
							questionSets={questionSets}
							page={currentPage}
						/>
					</form>
				</Box>
				<Box display='inline'>
					{ handlePreviousButton() }
				</Box>
				<Box mx={2} display='inline'>
					{ handleNextButton() }
				</Box>
				<Box m='auto'>
					<ProgressBar
						currentPage={currentPage}
					/>
				</Box>
			</Container>
		</ThemeProvider>
	)
}


export default App
