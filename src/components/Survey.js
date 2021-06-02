import React from 'react'
import PropTypes from 'prop-types'

import Parts from './Parts'
import ButtonHandler from './ButtonHandler'
import ProgressBar from './ProgressBar'

// Material UI
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import useStyles from '../styles'

// Images
import entrefox_logo from '../images/entrefox_logo.png'

const Survey = ({
	handleFormSubmit,
	questionSets,
	currentPage,
	handleNextPage,
	handlePreviousPage
}) => {
	const classes = useStyles()

	const handlePreviousButton = () => {
		if (currentPage === 1) {
			return null
		} else {
			return (
				<ButtonHandler
					text='Edellinen'
					handlePagination={() => handlePreviousPage()}
				/>
			)
		}
	}

	const handleNextButton = () => {
		if (questionSets.length === currentPage) {
			return (
				<ButtonHandler
					text='Olen valmis'
					handlePagination={(event) => handleFormSubmit(event)}
					questionSets={questionSets}
				/>
			)
		}
		return (
			<ButtonHandler
				text='Seuraava'
				handlePagination={() => handleNextPage()}
				questionSets={questionSets}
			/>
		)
	}

	return (
		<>
			<Container className={classes.survey} maxWidth='md'>
				<Box align='center'>
					<img
						className={classes.logo}
						src={entrefox_logo}
						alt='EntreFox logo'
					/>
				</Box>
				<Typography
					variant='h4'
					component='h1'
					align='center'
					gutterBottom>
					Yrittäjän kehityskeskustelu
				</Typography>
				<Box pt={2} pb={4} px={3} className={classes.form}>
					<form onSubmit={handleFormSubmit}>
						<Parts
							questionSets={questionSets}
							currentPage={currentPage}
						/>
					</form>
				</Box>

				{/* Buttons in a grid */}
				<Grid container direction='row' justify='space-between'>
					<Grid item>{handlePreviousButton()}</Grid>
					<Grid item>{handleNextButton()}</Grid>
				</Grid>
				<Box m='auto'>
					<ProgressBar />
				</Box>
			</Container>
			<Card className={classes.card} variant='outlined'>
				<CardMedia
					component='img'
					image='https://www.entrefox.fi/uploads/2020/04/48f777b7-logot-ef.png'
					title='EntreFox rahoittajat'
				/>
			</Card>
		</>
	)
}

Survey.propTypes = {
	handleFormSubmit: PropTypes.func,
	handleNextPage: PropTypes.func,
	handlePreviousPage: PropTypes.func,
	questionSets: PropTypes.array,
	currentPage: PropTypes.number
}

export default Survey
