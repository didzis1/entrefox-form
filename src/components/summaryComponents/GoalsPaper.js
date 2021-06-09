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

// eslint-disable-next-line no-unused-vars
const GoalsScroll = ({ answer }) => {
	const classes = useStyles()
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
			<Grid item>
				<Box className={classes.goalText}>
					<Typography variant='h6'>Tavoite 1</Typography>
					<Typography variant='body1'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque augue leo, mattis at efficitur at, blandit sit
						amet ante. Nam et accumsan ante. Sed tristique, massa
						eget efficitur semper, quam arcu pellentesque felis, at
						auctor elit mi sit amet risus. Sed diam lacus, accumsan
						non feugiat vel, volutpat ac nibh. Proin elementum metus
						iaculis diam pulvinar facilisis. Sed id nulla nulla.
						Integer porta sit amet dolor non luctus. Quisque pretium
						eros sem, ac tempor felis pellentesque vitae.
					</Typography>
				</Box>
			</Grid>
			<Grid item>
				<Box className={classes.goalText}>
					<Typography variant='h6'>Tavoite 2</Typography>
					<Typography variant='body1'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque augue leo, mattis at efficitur at, blandit sit
						amet ante. Nam et accumsan ante. Sed tristique, massa
						eget efficitur semper, quam arcu pellentesque felis, at
						auctor elit mi sit amet risus. Sed diam lacus, accumsan
						non feugiat vel, volutpat ac nibh. Proin elementum metus
						iaculis diam pulvinar facilisis. Sed id nulla nulla.
						Integer porta sit amet dolor non luctus. Quisque pretium
						eros sem, ac tempor felis pellentesque vitae.
					</Typography>
				</Box>
			</Grid>
			<Grid item>
				<Box className={classes.goalText}>
					<Typography variant='h6'>Tavoite 3</Typography>
					<Typography variant='body1'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque augue leo, mattis at efficitur at, blandit sit
						amet ante. Nam et accumsan ante. Sed tristique, massa
						eget efficitur semper, quam arcu pellentesque felis, at
						auctor elit mi sit amet risus. Sed diam lacus, accumsan
						non feugiat vel, volutpat ac nibh. Proin elementum metus
						iaculis diam pulvinar facilisis. Sed id nulla nulla.
						Integer porta sit amet dolor non luctus. Quisque pretium
						eros sem, ac tempor felis pellentesque vitae.
					</Typography>
				</Box>
			</Grid>
		</Grid>
	)
}

GoalsScroll.propTypes = {
	answer: PropTypes.array
}

export default GoalsScroll
