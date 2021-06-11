import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../contexts/FormContext'
import { getAnswerByID } from '../utils'

// Summary components
import ButtonHandler from './ButtonHandler'
import ChartBars from './summaryComponents/ChartBars'
import NumberGauge from './summaryComponents/NumberGauge'
import TextGauge from './summaryComponents/TextGauge'
import StickyNote from './summaryComponents/StickyNote'
import GoalsPaper from './summaryComponents/GoalsPaper'

// Material UI
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import useStyles from '../styles'
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded'
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded'

// Images
import entrefox_stocks from '../images/summaryImages/entrefox_stocks.png'
import entrefox_business from '../images/summaryImages/entrefox_business.png'

import html2pdf from 'html2pdf.js'
//import html2canvas from 'html2canvas'
//import jsPDF from 'jspdf'

// Convert date to dd.MM.YYYY format
const dateToYMD = (date) => {
	return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

const Summary = ({ handleFormSubmit }) => {
	const classes = useStyles()
	const { formData } = useForm()

	// Get todays date
	const currentDate = dateToYMD(new Date())

	// Value for question 7 (in variable, since used in multiple places)
	const sliderValue = getAnswerByID(3, 7)

	// Check if user remembers the date he last answered the survey (Page 2 - Question 2)
	let previouslyDoneSurvey
	if (typeof getAnswerByID(2, 2) === 'object') {
		previouslyDoneSurvey =
			'Olet edellisen kerran tehnyt kehityskeskustelun ' +
			dateToYMD(getAnswerByID(2, 2)) +
			'.'
	} else {
		previouslyDoneSurvey =
			'Olet ennen tehnyt kehityskeskustelun, mutta tarkka päivämäärä ei ole tiedossa.'
	}

	const questionEight = getAnswerByID(3, 8)

	const questionNine = (answer) => {
		switch (answer) {
			case 'Teen tehtäviäni yleensä sitä mukaa, kun niitä ilmestyy.':
				return 'Hoidat työtehtäväsi sitä mukaa, kun niitä ilmestyy. '
			case 'Teen yleensä töistäni aikataulun, jota pyrin noudattamaan.':
				return 'Teet töistäsi aikataulun, jota pyrit noudattamaan. '
			case 'Suunnittelen ja priorisoin säännöllisesti työtehtäväni keskittyen olennaiseen.':
				return 'Suunnittelet ja priorisoit säännöllisesti työtehtäväsi kesittyen olennaiseen. '
		}
	}

	const questionEleven = (answer) => {
		switch (answer) {
			case 'En tiedä lainkaan, kuinka hyödyntää digitaalisia työkaluja (esim. sovelluksia, ohjelmia, verkkosivuja) yrityksessäni.':
				return 'et tiedä lainkaan, kuinka hyödyntää digitaalisia työkaluja (esim. sovelluksia, ohjelmia, verkkosivuja) yrityksessäsi.'
			case 'Tiedän, millaisia digitaalisia työkaluja voisin hyödyntää yrityksessäni ja olen kokeillut muutamia.':
				return 'tiedät, millaisia digitaalisia työkaluja voisit hyödyntää yrityksessäsi ja olet kokeillut muutamia.'
			case 'Osaan käyttää useita digitaalisia työkaluja sekä hyödyntää niiden ominaisuuksia.':
				return 'osaat käyttää useita digitaalisia työkaluja sekä hyödyntää niiden ominaisuuksia.'
			case 'Seuraan aktiivisesti erilaisten digitaalisten palvelujen kehittymistä ja otan uusia työkaluja käyttöön tarpeen mukaan.':
				return 'seuraat aktiivisesti erilaisten digitaalisten palvelujen kehittymistä ja otat uusia työkaluja käyttöön tarpeen mukaan.'
			case 'Teen yleensä töistäni aikataulun, jota pyrin noudattamaan.':
				return 'teet yleensä töistäsi aikataulun, jota pyrit noudattamaan.'
		}
	}

	const downloadPDF = () => {
		var element = document.getElementById('summary')
		var opt = {
			margin: 0.5,
			filename: 'myfile.pdf',
			image: { type: 'jpeg' },
			html2canvas: { scale: 2 },
			jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
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
			<div id={'summary'}>
				{/* Header with EntreFox logo */}
				<Box my={5}>
					<Typography
						component='h1'
						variant='h3'
						color='primary'
						align='center'>
						Yrittäjän
					</Typography>
					<Typography
						variant='h4'
						component='h1'
						align='center'
						gutterBottom>
						kehityskeskustelun koonti
					</Typography>
					<Box align='center'>
						<img
							src={entrefox_business}
							className={classes.headingImage}
						/>
					</Box>
					<Typography variant='h6' align='center'>
						Olet käynyt kehityskeskustelun {currentDate}.
					</Typography>
				</Box>
				<Divider />
				{/* Page 3: Questions ID 5 - 11 */}
				<Box mt={10} mb={5}>
					<Typography variant='h5' className={classes.heading}>
						Tietoisuus nykyhetkellä
					</Typography>
					{/* Questions 5-6 */}
					<Typography variant='body1'>
						Arvioit voimavarojesi olevan yrittäjänä{' '}
						{getAnswerByID(3, 5).toLowerCase()} ja voimavaroissa
						olevan {getAnswerByID(3, 6).toLowerCase()} suhteessa
						tulevaisuuden tarjoamiin vaatimuksiin ja
						mahdollisuuksiin.
					</Typography>
					{/* Chart for questions */}
					<Box mt={3}>
						<ChartBars answers={formData} />
						{/* div to mark the end of a page for the PDF */}
						<div className='html2pdf__page-break'></div>
					</Box>
				</Box>

				{/* Question 7 */}
				<Box my={10}>
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
					<Box mt={5}>
						{/* Gauge for question 7 */}
						<NumberGauge answer={sliderValue} />
					</Box>
				</Box>

				{/* Question 8 - 9 */}
				<Box mt={10}>
					<Typography variant='body1'>
						Arviosi mukaan työ, vapaa-aika ja lepo ovat tasapainossa
						elämässäsi{' '}
						<i>
							{questionEight.toLowerCase().split(' ')[0]} tavalla
						</i>
						. {questionNine(getAnswerByID(3, 9))}
						Voit syventyä ajankäyttöösi ja tutustua vinkkeihimme{' '}
						<a
							className={classes.linkTag}
							target='blank'
							href='https://www.entrefox.fi/ajanhallinta/'>
							ajanhallinnan teemassa
						</a>
						.
					</Typography>
					<Box mt={5}>
						<TextGauge answer={questionEight} />
					</Box>
				</Box>

				{/* Question 11 */}
				<Box mt={10} mb={2}>
					<Typography variant='body1'>
						Digitaalisten työkalujen osalta{' '}
						<Box component='span' fontStyle='italic'>
							{questionEleven(getAnswerByID(3, 11))}
						</Box>{' '}
						<a
							className={classes.linkTag}
							target='blank'
							href='https://www.entrefox.fi/yrittajan-osaamiskartoitus/'>
							Osaamisen teemassamme
						</a>{' '}
						on käsitelty yrittäjän monipuolisia osaamisalueita.
					</Typography>
				</Box>
				{/* Question 10 */}
				<Box mb={10}>
					{/* div to mark the end of a page for the PDF */}
					<div className='html2pdf__page-break'></div>
					<Typography variant='body1'>
						Työhösi liittyvistä tiedoista ja taidoista kerroit
						seuraavasti:
					</Typography>
					<Box my={4}>
						<StickyNote answer={getAnswerByID(3, 10)} />
					</Box>
				</Box>

				<Divider />
				{/* Page 4: Question 12 (Possible multiple fields in one question) */}
				<Box my={10}>
					<Box mb={3}>
						<Typography variant='h5' className={classes.heading}>
							Tehdyt valinnat
						</Typography>
					</Box>
					<Box mb={10}>
						<Typography variant='body1'>
							Valitsit seuraavat asiat, joihin haluat panostaa
							tulevan puolen vuoden aikana osaamisesi ja/tai
							hyvinvointisi kehittämiseksi.
						</Typography>
					</Box>
					{/* Paper with EntreFox badge including fields in question 12 */}
					<GoalsPaper answers={getAnswerByID(4, 12)} />
				</Box>

				<Divider />

				{/* No questions - info text with image */}
				<Box my={10}>
					<Box mb={3}>
						<Typography variant='h5' className={classes.heading}>
							Seuraa tilannettasi ja muuta kurssia tarvittaessa
						</Typography>
					</Box>
					<Grid
						container
						direction='row'
						justify='space-around'
						alignItems='flex-start'>
						<Grid item xs={8} md={10}>
							<Typography variant='body1'>
								Seuraa kehittymistäsi, mutta muista kuunnella
								itseäsi matkan varrella. Onko tavoitteet
								edelleen oikeat, vai tarvitseeko kurssia
								muuttaa?
							</Typography>
						</Grid>
						<Grid item xs={4} md={2}>
							<Box align='center'>
								<img
									className={classes.summaryImage}
									src={entrefox_stocks}
									alt='Kuva kurssin seurannasta'
								/>
							</Box>
						</Grid>
					</Grid>
				</Box>

				{/* Extra part of the survey - ONLY IF USER ANSWERED YES TO FIRST QUESTION */}
				{/* Page 2 - Questions 2-4 */}
				{getAnswerByID(1, 1) === 'Kyllä' ? (
					<Box my={10}>
						<Box mb={3}>
							<Typography
								variant='h5'
								className={classes.heading}>
								Edellinen kehityskeskustelu
							</Typography>
						</Box>
						<Typography variant='body1'>
							{previouslyDoneSurvey} <br />
						</Typography>
						<Box mt={2}>
							<Typography variant='h6'>
								{' '}
								Edellisellä kerralla asetit itsellesi nämä
								tavoitteet ja askelmerkit
							</Typography>
						</Box>

						<Box className={classes.textBorder} mb={2}>
							<Typography variant='body1'>
								{getAnswerByID(2, 3)}
							</Typography>
						</Box>

						<Typography variant='h6'>
							Tavoitteesi toteutuivat
						</Typography>
						<Box>
							<Typography variant='body1'>
								{getAnswerByID(2, 4)}
							</Typography>
						</Box>
					</Box>
				) : null}
				<Divider />
			</div>
			<Box mt={2}>
				<Grid
					container
					direction='row'
					justify='space-between'
					alignItems='center'>
					<Grid item>
						<Box>
							<ButtonHandler
								text='Lataa PDF'
								colors={{ bg: '#cddc39', bgHover: '#c0ca33' }}
								startIcon={<GetAppRoundedIcon />}
								handlePagination={downloadPDF}
							/>
						</Box>
					</Grid>
					<Grid item>
						<Box>
							<ButtonHandler
								href='https://www.entrefox.fi/kehityskeskustelu/'
								text='Päättä kehityskeskustelu'
								startIcon={<CheckCircleOutlineRoundedIcon />}
								colors={{
									bg: '#ffeb3b',
									bgHover: '#fbc02d'
								}}
							/>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}

Summary.propTypes = {
	handleFormSubmit: PropTypes.func
}

export default Summary
