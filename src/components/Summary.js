import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../contexts/FormContext'

// Summary components
import ButtonHandler from './ButtonHandler'
import ChartBars from './summaryComponents/ChartBars'
import Gauge from './summaryComponents/Gauge'
import ResultLine from './summaryComponents/ResultLine'
import StickyNote from './summaryComponents/StickyNote'

// Material UI
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import useStyles from '../styles'

// Images
import entrefox_logo from '../images/entrefox_logo.png'
import entrefox_scroll from '../images/summaryImages/entrefox_scroll.png'

const Summary = ({ handleFormSubmit }) => {
	if (handleFormSubmit === undefined) return ''
	const classes = useStyles()
	const { formData } = useForm()
	// Get todays date
	console.log(formData)
	const currentDate = new Date()
	const [date, month, year] = [
		currentDate.getDate(),
		currentDate.getMonth(),
		currentDate.getFullYear(),
	]

	// Value for question 7
	const sliderValue = formData
		.find((answersPage) => answersPage.page === 3)
		.answers.find((answer) => answer.id === 7).value
	return (
		<Container className={classes.survey} maxWidth='md'>
			{/* Go back to survey button */}
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
					Olet käynyt kehityskeskustelun {date}.{month}.{year}.
				</Typography>
			</Box>

			{/* Part one of the summary - Page 3: Questions ID 5 - 11 */}
			<Box my={10}>
				<Typography
					variant='h6'
					style={{ fontWeight: 'bold', color: '#8f9a27' }}>
					OSA 1. Tietoisuus nykyhetkellä
				</Typography>
				{/* Questions 5-6 */}
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
				<Box my={5}>
					{/* Gauge for question */}
					<Gauge answer={sliderValue} />
				</Box>
			</Box>

			{/* Question 8 */}
			<Box my={10}>
				<Grid
					container
					direction='row'
					justify='space-evenly'
					alignItems='center'>
					<Grid item xs={7}>
						<Typography variant='body1'>
							Arviosi mukaan työ, vapaa-aika ja lepo ovat
							tasapainossa elämässäsi{' '}
							<i>
								{
									formData
										.find(
											(answersPage) =>
												answersPage.page === 3
										)
										.answers.find(
											(answer) => answer.id === 8
										)
										.value.toLowerCase()
										.split(' ')[0]
								}{' '}
								tavalla
							</i>
							. Hoidat työtehtäväsi sitä mukaa, kun niitä
							ilmestyy. Voit syventyä ajankäyttöösi ja tutustua
							vinkkeihimme{' '}
							<a
								className={classes.linkTag}
								target='blank'
								href='https://www.entrefox.fi/ajanhallinta/'>
								ajanhallinnan teemassa
							</a>
							.
						</Typography>
					</Grid>
					<Grid item xs={5}>
						<ResultLine
							answer={formData
								.find((answersPage) => answersPage.page === 3)
								.answers.find((answer) => answer.id === 8)}
						/>
					</Grid>
				</Grid>
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

			<Divider />
			<Box my={10}>
				<Typography variant='body1'>
					Työhösi liittyvistä tiedoista ja taidoista kerroit
					seuraavasti:
				</Typography>
				<Box my={4}>
					<StickyNote />
				</Box>
			</Box>

			<Divider />
			{/* Part two of the summary - Page 4: Question 12 (Possible multiple fields in one question) */}
			<Box my={10}>
				<Typography
					variant='h6'
					style={{ fontWeight: 'bold', color: '#8f9a27' }}>
					OSA 2. Tehdyt valinnat
				</Typography>
			</Box>

			<Box>
				<Typography variant='body1'>
					Valitsit seuraavat kolme asiaa, joihin haluat panostaa
					tulevan puolen vuoden aikana osaamisesi ja/tai hyvinvointisi
					kehittämiseksi.
				</Typography>
				{/* Scroll with text for question 12 */}
				<img
					className={classes.scroll}
					src={entrefox_scroll}
					alt='EntreFox logo'
				/>
			</Box>
		</Container>
	)
}

Summary.propTypes = {
	handleFormSubmit: PropTypes.func,
}

export default Summary
