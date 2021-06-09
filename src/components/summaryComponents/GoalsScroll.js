import React from 'react'
import PropTypes from 'prop-types'

// Material UI
import useStyles from '../../styles'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

// eslint-disable-next-line no-unused-vars
const GoalsScroll = ({ answer, badge }) => {
	const classes = useStyles()
	return (
		<Grid container className={classes.goalBox} direction='column'>
			<Grid item>
				<Box className={classes.badge}>
					<img src={badge} />
				</Box>
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
	answer: PropTypes.array,
	badge: PropTypes.string
}

export default GoalsScroll
