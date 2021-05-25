import React from 'react'
import PropTypes from 'prop-types'

import ButtonHandler from './ButtonHandler'
import Bar from './chartComponents/Bar'

import useStyles from '../styles'
import { Box, Container, Typography } from '@material-ui/core'

import { useSelector } from 'react-redux'

const Summary = ({ handleFormSubmit }) => {
	const classes = useStyles()
	const answers = useSelector((state) => state.answers)
	const currentDate = new Date()
	const [date, month, year] = [
		currentDate.getDate(),
		currentDate.getMonth(),
		currentDate.getFullYear()
	]
	return (
		<Container className={classes.survey} maxWidth='md'>
			<ButtonHandler
				text='Palaa takaisin'
				handlePagination={handleFormSubmit}
			/>
			<Box my={5}>
				<Typography
					variant='h4'
					component='h1'
					align='center'
					gutterBottom>
					Kehityskeskustelun yhteenveto
				</Typography>
				<Typography variant='h6' align='center'>
					Olet käynyt kehityskeskustelun {date}.{month}.{year}.
				</Typography>
			</Box>
			<Box my={5} mx={1}>
				<Typography
					variant='h6'
					style={{ fontWeight: 'bold', color: '#8f9a27' }}>
					OSA 1. Tietoisuus nykyhetkellä
				</Typography>
				<Typography>
					Arvioit voimavarojesi olevan yrittäjänä hyvällä tasolla ja
					voimavaroissa olevan kehittämisen varaa suhteessa
					tulevaisuuden tarjoamiin vaatimuksiin ja mahdollisuuksiin.
				</Typography>
			</Box>
			<Box>
				<Bar answers={answers} />
			</Box>
		</Container>
	)
}

Summary.propTypes = {
	handleFormSubmit: PropTypes.func
}

export default Summary
