import React from 'react'
import PropTypes from 'prop-types'

// Material UI
import useStyles from '../../styles'

import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

// eslint-disable-next-line no-unused-vars
const GoalsScroll = ({ answer, image }) => {
	const classes = useStyles()
	return (
		<Box align='center'>
			{answer.map((answers) => {
				return (
					<Paper key={answers.ID} className={classes.goalBox}>
						<Typography gutterBottom variant='h6'>
							{answers.values[0].value}, koska
						</Typography>
						<Divider />
						<Typography gutterBottom variant='body1'>
							{answers.values[1].value}
						</Typography>
					</Paper>
				)
			})}
		</Box>
	)
}

GoalsScroll.propTypes = {
	answer: PropTypes.array,
	image: PropTypes.string
}

export default GoalsScroll
