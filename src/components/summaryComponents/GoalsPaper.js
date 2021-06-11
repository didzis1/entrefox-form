import React from 'react'
import PropTypes from 'prop-types'

// Material UI
import useStyles from '../../styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

// Images
import entrefox_badge from '../../images/summaryImages/entrefox_badge.png'
import entrefox_steps from '../../images/summaryImages/entrefox_steps.png'

const GoalsScroll = ({ answers }) => {
	const classes = useStyles()
	return answers.map((answer, index) => {
		return (
			<Grid
				key={answer.ID}
				container
				className={classes.goalBox}
				justify='center'
				direction='column'>
				<Grid container direction='row' item alignItems='center'>
					<Grid item xs={12} md={5}>
						<Box className={classes.badge}>
							<img src={entrefox_badge} />
						</Box>
					</Grid>
					<Grid item>
						<Box mx={2} my={1}>
							<Typography variant='h4'>{index+1}. Tavoite</Typography>
						</Box>
					</Grid>
				</Grid>
				<Grid item>
					<Box mx={2} my={1}>
						<Typography
							variant='body1'
							className={classes.noteText}
							key={answers.ID}>
							Tavoite: {answer.values[0].value}
						</Typography>
					</Box>
				</Grid>
				<Grid item>
					<Box mx={2} my={1}>
						<Typography
							variant='body1'
							className={classes.noteText}
							key={answers.ID}>
							Tavoite on tärkeä, koska: {answer.values[1].value}
						</Typography>
					</Box>
				</Grid>
				<Grid item>
					<Box mx={2} my={1}>
						<Typography
							variant='body1'
							className={classes.noteText}
							key={answers.ID}>
							Askelmerkit tavoitteen saavuttamiseksi:{' '}
							{answer.values[2].value}
						</Typography>
					</Box>
				</Grid>

				<Grid item>
					<Box align='center'>
						<img
							className={classes.summaryImage}
							src={entrefox_steps}
							alt='Askeleet ja limen värinen lippu'
						/>
					</Box>
				</Grid>
			</Grid>
		)
	})
}

GoalsScroll.propTypes = {
	answers: PropTypes.array
}

export default GoalsScroll
