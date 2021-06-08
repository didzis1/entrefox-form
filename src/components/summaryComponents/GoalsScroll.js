import React from 'react'
import PropTypes from 'prop-types'

// Material UI
import useStyles from '../../styles'

import { Box } from '@material-ui/core'

// eslint-disable-next-line no-unused-vars
const GoalsScroll = ({ answer, image }) => {
	const classes = useStyles()
	return (
		// <Box className={classes.scrollContainer}>
		// 	<img
		// 		src={entrefox_scroll}
		// 		className={classes.scrollImage}
		// 		alt='Kirjakäärö, joka sisältää tavoitteita'
		// 	/>
		// 	<Box className={classes.scrollText}>
		// 		<Typography>{answer.value[0].values[0].value}</Typography>
		// 		<Typography>{answer.value[0].values[1].value}</Typography>
		// 	</Box>
		// </Box>
		<Box className={classes.scrollContainer}>
			{answer.value.map((answerSets) => {
				return (
					<Box key={answerSets.id}>
						Tavoite {answerSets.ID + 1}
						{answerSets.values.map((answer) => {
							return <Box key={answer.id}>{answer.value}</Box>
						})}
					</Box>
				)
			})}
		</Box>
	)
}

GoalsScroll.propTypes = {
	answer: PropTypes.object,
	image: PropTypes.string
}

export default GoalsScroll
