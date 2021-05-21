import React from 'react'
import PropTypes from 'prop-types'

import Parts from './Parts'
import ButtonHandler from './ButtonHandler'
import ProgressBar from './ProgressBar'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { Card, CardMedia } from '@material-ui/core'

import useStyles from '../styles'

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
					handlePagination={handleFormSubmit}
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
		<>
			<Container className={classes.survey} maxWidth='md'>
				<Typography
					variant='h4'
					component='h1'
					align='center'
					gutterBottom>
					Yrittäjän kehityskeskustelu
				</Typography>
				<Box pt={2} pb={4} px={3} className={classes.form}>
					<form onSubmit={handleFormSubmit}>
						<Parts questionSets={questionSets} />
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
					className={classes.media}
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
