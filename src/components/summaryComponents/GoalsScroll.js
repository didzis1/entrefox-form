import React from 'react'
import PropTypes from 'prop-types'

// Material UI
import useStyles from '../../styles'

import entrefox_scroll from '../../images/summaryImages/entrefox_scroll.png'
import { Box, Typography } from '@material-ui/core'

const GoalsScroll = ({ answer }) => {
	console.log(answer)
	const classes = useStyles()
	return (
		<Box className={classes.scrollContainer}>
			<img
				src={entrefox_scroll}
				className={classes.scrollImage}
				alt='Kirjakäärö, joka sisältää tavoitteita'
			/>
			<Box className={classes.scrollText}>
				<Typography>{answer.value[0].values[0].value}</Typography>
				<Typography>{answer.value[0].values[1].value}</Typography>
			</Box>
		</Box>
	)
}

GoalsScroll.propTypes = {
	answer: PropTypes.object
}

export default GoalsScroll
