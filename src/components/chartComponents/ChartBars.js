import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import useStyles from '../../styles'

const graphValues = [
	{
		percentage: 20,
		text: 'Heikolla tasolla'
	},
	{
		percentage: 40,
		text: 'Kehitettävää on'
	},
	{
		percentage: 60,
		text: 'Riittävällä tasolla'
	},
	{
		percentage: 80,
		text: 'Hyvällä tasolla'
	},
	{
		percentage: 100,
		text: 'Erinomaisella tasolla'
	}
]

const Bar = ({ answers }) => {
	const classes = useStyles()
	const barItems = answers.find((answersPage) => answersPage.page === 3)
	const barOne = barItems.answers.find((answer) => answer.id === 5)
	const barTwo = barItems.answers.find((answer) => answer.id === 6)
	return (
		<>
			{graphValues.map((value) => {
				return (
					<div key={value.percentage}>
						<Grid
							container
							justify='center'
							align-items='center'
							direction='row'
							className={classes.mainGrid}>
							<Grid
								container
								item
								direction='column'
								justify='center'
								alignItems='flex-start'
								xs={4}
								sm={2}
								className={classes.chartLabel}>
								<Typography variant='subtitle2'>
									{value.text}
								</Typography>
							</Grid>
							<Grid
								container
								direction='column'
								item
								justify='space-around'
								xs={8}
								sm={10}
								className={classes.gridItem}>
								{value.text === barOne.value ? (
									<div
										className={classes.chartBar}
										style={{
											width: `${value.percentage}%`,
											background: '#cddc39',
											border: '1px solid #c0ca33'
										}}></div>
								) : (
									<div
										className={classes.chartBar}
										style={{
											width: `${value.percentage}%`
										}}></div>
								)}
								{value.text === barTwo.value ? (
									<div
										className={classes.chartBar}
										style={{
											width: `${value.percentage}%`,
											background: '#ffeb3b',
											border: '1px solid #fbc02d'
										}}></div>
								) : (
									<div
										className={classes.chartBar}
										style={{
											width: `${value.percentage}%`
										}}></div>
								)}
							</Grid>
						</Grid>
					</div>
				)
			})}
			<Grid container direction='row'>
				<Grid
					container
					item
					direction='row'
					justify='center'
					alignItems='center'>
					<div
						className={`${classes.labelBox} ${classes.limeBox}`}></div>
					<Typography variant='body2'>
						Voimavarat nykyhetkellä
					</Typography>
				</Grid>
				<Grid
					container
					item
					direction='row'
					justify='center'
					alignItems='center'
					wrap='nowrap'>
					<Grid item>
						<div
							className={`${classes.labelBox} ${classes.yellowBox}`}></div>
					</Grid>
					<Grid item>
						<Typography variant='body2'>
							Voimavarat suhteessa tulevaisuuteen
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}

Bar.propTypes = {
	answers: PropTypes.object
}

export default Bar
