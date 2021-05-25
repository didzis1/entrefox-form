import React from 'react'
import PropTypes from 'prop-types'

import ButtonHandler from './ButtonHandler'
import ChartBars from './chartComponents/ChartBars'

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
			<Box mt={5}>
				<ChartBars answers={answers} />
			</Box>
			<Box mt={10}>
				<Typography>
					Arvioit työkykysi olevan asteikolla 1-10 tasolla{' '}
					{
						answers
							.find((answersPage) => answersPage.page === 3)
							.answers.find((answer) => answer.id === 7).value
					}
					. Yrittäjän on tärkeää pitää huolta yrityksen pyörittämisen
					lisäksi myös itsestään, sillä hyvinvoiva yritys lähtee
					hyvinvoivasta yrittäjästä. Olemme koonneet tietoa
					terveyskunnosta, käy halutessasi hakemassa vinkkejä
					hyvinvointisi kehittämiseen ja ylläpitämiseen.
				</Typography>
			</Box>
		</Container>
	)
}

Summary.propTypes = {
	handleFormSubmit: PropTypes.func
}

export default Summary
