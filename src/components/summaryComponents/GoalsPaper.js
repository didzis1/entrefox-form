import React from 'react'
import PropTypes from 'prop-types'

// Material UI
import useStyles from '../../styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

// Images
import entrefox_badge from '../../images/summaryImages/entrefox_badge.png'
import entrefox_steps from '../../images/summaryImages/entrefox_steps.png'

const GoalsScroll = ({ answer }) => {
	const classes = useStyles()

	// Find values from multi-text with first two fields
	const filteredAnswers = answer.map((answers) =>
		answers.values.filter((answer) => answer.ID !== 2)
	)

	return (
		<Grid container className={classes.goalBox} direction='column'>
			<Grid container item direction='row' justify='space-around'>
				<Grid item xs={12} md={5}>
					<Box className={classes.badge}>
						<img src={entrefox_badge} />
					</Box>
				</Grid>
				<Grid item xs={10} sm={6} md={7}>
					<img
						className={classes.summaryImage}
						src={entrefox_steps}
						alt='Askeleet ja limen värinen lippu'
					/>
				</Grid>
			</Grid>
			{filteredAnswers.map((answers, index) => {
				return (
					<Grid key={index} item>
						<Box className={classes.goalText}>
							<Typography variant='h6'>
								{answers[0].value}
							</Typography>
							<Typography variant='body1'>
								{answers[1].value}
							</Typography>
						</Box>
					</Grid>
				)
			})}
		</Grid>
	)
}

GoalsScroll.propTypes = {
	answer: PropTypes.array
}

export default GoalsScroll
