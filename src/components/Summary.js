import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../contexts/FormContext'
import { getAnswerByID } from '../utils'

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


// Images
import entrefox_logo from '../images/entrefox_logo.png'
import entrefox_badge from '../images/summaryImages/entrefox_badge.png'
import entre_askelmerkit from '../images/summaryImages/entre-askelmerkit.svg'
import entre_seuraa_kurssia from '../images/summaryImages/entre-seuraa-kurssia.svg'
=======
import html2pdf from 'html2pdf.js'
//import html2canvas from 'html2canvas'
//import jsPDF from 'jspdf'

const dateToYMD = (date) => {
	return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

const Summary = ({ handleFormSubmit }) => {
	const classes = useStyles()
	const { formData } = useForm()
	// Get todays date
	//console.log(formData)
	const currentDate = dateToYMD(new Date())

	// Value for question 7
	const sliderValue = getAnswerByID(3, 7)

	// Check if user remembers the date he last answered the survey
	let previouslyDoneSurvey
	if (typeof getAnswerByID(2, 2) === 'object') {
		previouslyDoneSurvey =
			'Olet edellisen kerran tehnyt kehityskeskustelun ' +
			dateToYMD(getAnswerByID(2, 2)) +
			'.'
	} else {
		previouslyDoneSurvey =
			'Olet ennen tehnyt kehityskeskustelun, mutta et muistanut tarkkaa päivämäärää.'
	}

	const currentDate = new Date()
	const [date, month, year] = [
		currentDate.getDate(),
		currentDate.getMonth(),
		currentDate.getFullYear(),
	]

	const sliderValue = formData
		.find((answersPage) => answersPage.page === 3)
		.answers.find((answer) => answer.id === 7).value

	const downloadPDF = () => {
		var element = document.getElementById('summary')
		var opt = {
			margin: 1,
			filename: 'myfile.pdf',
			image: { type: 'jpeg' },
			html2canvas: { scale: 2 },
			jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
		}
		html2pdf().from(element).set(opt).save()
	}
  
	return (
		<Container className={classes.survey} maxWidth='md'>
			<ButtonHandler
				text='Palaa takaisin'
				colors={{ bg: '#cddc39', bgHover: '#c0ca33' }}
				handlePagination={handleFormSubmit}
			/>

			{/* Header with EntreFox logo */}
			<Box my={5}>
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
					Kehityskeskustelun koonti
				</Typography>
				<Typography variant='h6' align='center'>
					Olet käynyt kehityskeskustelun {currentDate}.
				</Typography>
			</Box>
			<Divider />
			{/* Part one of the summary - Page 3: Questions ID 5 - 11 */}
			<Box my={8}>
				<Typography variant='h6' className={classes.heading}>
					OSA 1. Tietoisuus nykyhetkellä
				</Typography>
				{/* Questions 5-6 */}
				<Typography variant='body1'>
					Arvioit voimavarojesi olevan yrittäjänä{' '}
					{getAnswerByID(3, 5).toLowerCase()} ja voimavaroissa olevan{' '}
					{getAnswerByID(3, 6).toLowerCase()} suhteessa tulevaisuuden
					tarjoamiin vaatimuksiin ja mahdollisuuksiin.
				</Typography>
				{/* Chart for questions */}
				<Box mt={3}>
					<ChartBars answers={formData} />
				</Box>
			</Box>

			{/* Question 7 */}
			<Box my={10}>
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
			<ButtonHandler
				text='Lataa PDF'
				colors={{ bg: '#cddc39', bgHover: '#c0ca33' }}
				handlePagination={downloadPDF}
			/>
			<div id={'summary'}>
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
			</Box>

			{/* Question 8 */}
			<Box my={10}>
				<Typography variant='body1'>
					Arviosi mukaan työ, vapaa-aika ja lepo ovat tasapainossa
					elämässäsi{' '}
					<i>
						{getAnswerByID(3, 8).toLowerCase().split(' ')[0]}{' '}
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
				<Typography variant='h6'>Insert gauge here</Typography>
			</Box>

			<Box my={10}>
				<Typography variant='body1'>
					Digitaalisten työkalujen osalta osaat käyttää yrityksessäsi
					käytössä olevia digitallisia työkaluja ja niiden erilaisia
					ominaisuuksia. ??????????{' '}
					<a
						className={classes.linkTag}
						target='blank'
						href='https://www.entrefox.fi/yrittajan-osaamiskartoitus/'>
						Osaamisen teemassamme
					</a>{' '}
					on käsitelty yrittäjän monipuolisia osaamisalueita.
				</Typography>
			</Box>

			<Box my={10}>
				<Typography variant='body1'>
					Työhösi liittyvistä tiedoista ja taidoista kerroit
					seuraavasti:
				</Typography>
				<Box my={4}>
					<StickyNote answer={getAnswerByID(3, 10)} />
				</Box>
			</Box>

			<Divider />
			{/* Part two of the summary - Page 4: Question 12 (Possible multiple fields in one question) */}
			<Box my={10}>
				<Box mb={3}>
					<Typography variant='h6' className={classes.heading}>
						OSA 2. Tehdyt valinnat
					</Typography>
				</Box>
				<Box mb={3}>
					<Typography variant='body1'>
						Valitsit seuraavat kolme asiaa, joihin haluat panostaa
						tulevan puolen vuoden aikana osaamisesi ja/tai
						hyvinvointisi kehittämiseksi.
					</Typography>
				</Box>

				{/* Scroll with text for question 12 */}
				<Box align='center'>
					<img
						className={classes.summaryImage}
						src={entre_askelmerkit}
						alt='Askeleet ja limen värinen lippu'
					/>
				</Box>
				<GoalsScroll
					answer={getAnswerByID(4, 12)}
					badge={entrefox_badge}
				/>
			</Box>

			<Divider />
			{/* Part three of the summary */}
			<Box my={10}>
				<Box mb={3}>
					<Typography variant='h6' className={classes.heading}>
						OSA 3. Askelmerkit tavoitteiden saavuttamiseksi
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

				{/* div to mark the end of a page for the PDF */}
				<div className='html2pdf__page-break'></div>

				<Box mt={10} mb={5}>
					<Typography variant='body1'>
						Arvioit työkykysi olevan asteikolla 1-10 tasolla{' '}
						{sliderValue}. Yrittäjän on tärkeää pitää huolta
						yrityksen pyörittämisen lisäksi myös itsestään, sillä
						hyvinvoiva yritys lähtee hyvinvoivasta yrittäjästä.
						Olemme koonneet{' '}
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
									.find(
										(answersPage) => answersPage.page === 3
									)
									.answers.find((answer) => answer.id === 8)
									.value.toLowerCase()
									.split(' ')[0]
							}{' '}
							tavalla
						</i>
						. Hoidat työtehtäväsi sitä mukaa, kun niitä ilmestyy.
						Voit syventyä ajankäyttöösi ja tutustua vinkkeihimme{' '}
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
						Digitaalisten työkalujen osalta osaat käyttää
						yrityksessäsi käytössä olevia digitallisia työkaluja ja
						niiden erilaisia ominaisuuksia.{' '}
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

			{/* Part five of the summary - ONLY IF USER ANSWERED YES TO FIRST QUESTION */}
			{getAnswerByID(1, 1) === 'Kyllä' ? (
				<Box my={10}>
					<Box mb={3}>
						<Typography variant='h6' className={classes.heading}>
							OSA 5. Edellinen kehityskeskustelu
						</Typography>
					</Box>
					<Typography variant='body1'>
						{previouslyDoneSurvey} <br />
						Edellisellä kerralla asetit itsellesi nämä tavoitteet ja
						askelmerkit:
					</Typography>
					<Box className={classes.textBorder} mb={2}>
						<Typography variant='body1'>
							{getAnswerByID(2, 3)}
						</Typography>
					</Box>

					<Typography variant='body1'>
						Tavoitteesi toteutuivat:
					</Typography>
					<Box>
						<Typography variant='body1'>
							{getAnswerByID(2, 4)}
						</Typography>
					</Box>
				</Box>
			) : null}
			<Divider />
				{/* div to mark the end of a page for the PDF */}
				<div className='html2pdf__page-break'></div>

				<Box>
					<Typography variant='body1' align='center'>
						Työhösi liittyvistä tiedoista ja taidoista kerroit
						seuraavasti:
					</Typography>
					<Box my={4}>
						<StickyNote
							answer={formData
								.find((answersPage) => answersPage.page === 3)
								.answers.find((answer) => answer.id === 10)}
						/>
					</Box>
				</Box>
			</div>
		</Container>
	)
}

Summary.propTypes = {
	handleFormSubmit: PropTypes.func,
}

export default Summary
