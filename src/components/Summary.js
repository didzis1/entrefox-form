import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../contexts/FormContext'

// Summary components
import ButtonHandler from './ButtonHandler'
import ChartBars from './summaryComponents/ChartBars'
import Gauge from './summaryComponents/Gauge'
import StickyNote from './summaryComponents/StickyNote'

// Material UI
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import useStyles from '../styles'

//import html2canvas from 'html2canvas'
//import jsPDF from 'jspdf'

const Summary = ({ handleFormSubmit }) => {
	const classes = useStyles()
	const { formData } = useForm()

	const currentDate = new Date()
	const [date, month, year] = [
		currentDate.getDate(),
		currentDate.getMonth(),
		currentDate.getFullYear(),
	]
	/*
	const downloadPDF = () => {
		html2canvas(document.getElementById('summary')).then((canvas) => {
			// Your IMAGE_DATA_URI
			const imgData = canvas.toDataURL('image/png')
			// Make pdf
			const pdf = new jsPDF()
			// add image
			pdf.addImage(imgData, 'PNG', 0, 0)
			// Save document
			pdf.save('charts.pdf')
		})
	}*/

	const sliderValue = formData
		.find((answersPage) => answersPage.page === 3)
		.answers.find((answer) => answer.id === 7).value
	return (
		<Container id={'summary'} className={classes.survey} maxWidth='md'>
			<ButtonHandler
				text='Palaa takaisin'
				colors={{ bg: '#cddc39', bgHover: '#c0ca33' }}
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
				<Typography variant='body1'>
					Arvioit voimavarojesi olevan yrittäjänä{' '}
					{formData
						.find((answersPage) => answersPage.page === 3)
						.answers.find((answer) => answer.id === 5)
						.value.toLowerCase()}{' '}
					ja voimavaroissa olevan{' '}
					{formData
						.find((answersPage) => answersPage.page === 3)
						.answers.find((answer) => answer.id === 6)
						.value.toLowerCase()}{' '}
					suhteessa tulevaisuuden tarjoamiin vaatimuksiin ja
					mahdollisuuksiin.
				</Typography>
			</Box>
			<Box mt={5}>
				<ChartBars answers={formData} />
			</Box>
			<Box mt={10} mb={5}>
				<Typography variant='body1'>
					Arvioit työkykysi olevan asteikolla 1-10 tasolla{' '}
					{sliderValue}. Yrittäjän on tärkeää pitää huolta yrityksen
					pyörittämisen lisäksi myös itsestään, sillä hyvinvoiva
					yritys lähtee hyvinvoivasta yrittäjästä. Olemme koonneet{' '}
					<a
						className={classes.linkTag}
						target='blank'
						href='https://www.entrefox.fi/terveyskunto-ja-sen-kehittaminen/'>
						tietoa terveyskunnosta
					</a>
					, käy halutessasi hakemassa vinkkejä hyvinvointisi
					kehittämiseen ja ylläpitämiseen.
				</Typography>
			</Box>
			<Gauge answer={sliderValue} />
			<Box my={5}>
				<Typography variant='body1'>
					Arviosi mukaan työ, vapaa-aika ja lepo ovat tasapainossa
					elämässäsi{' '}
					<i>
						{
							formData
								.find((answersPage) => answersPage.page === 3)
								.answers.find((answer) => answer.id === 8)
								.value.toLowerCase()
								.split(' ')[0]
						}{' '}
						tavalla
					</i>
					. Hoidat työtehtäväsi sitä mukaa, kun niitä ilmestyy. Voit
					syventyä ajankäyttöösi ja tutustua vinkkeihimme{' '}
					<a
						className={classes.linkTag}
						target='blank'
						href='https://www.entrefox.fi/ajanhallinta/'>
						ajanhallinnan teemassa
					</a>
					.
				</Typography>
				graph here
				<Typography variant='body1'>
					Digitaalisten työkalujen osalta osaat käyttää yrityksessäsi
					käytössä olevia digitallisia työkaluja ja niiden erilaisia
					ominaisuuksia.{' '}
					<a
						className={classes.linkTag}
						target='blank'
						href='https://www.entrefox.fi/yrittajan-osaamiskartoitus/'>
						Osaamisen teemassamme
					</a>{' '}
					on käsitelty yrittäjän monipuolisia osaamisalueita.
				</Typography>
				{/* Tähän tulee gauge */}
			</Box>

			<Box>
				<Typography variant='body1' align='center'>
					Työhösi liittyvistä tiedoista ja taidoista kerroit
					seuraavasti:
				</Typography>
				<Box my={4}>
					<StickyNote />
				</Box>
			</Box>
		</Container>
	)
}

Summary.propTypes = {
	handleFormSubmit: PropTypes.func,
}

export default Summary
