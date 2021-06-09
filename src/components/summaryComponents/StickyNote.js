import React from 'react'
import PropTypes from 'prop-types'

// Material UI
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import useStyles from '../../styles'

const StickyNote = ({ answer }) => {
	const classes = useStyles()
	return (
		<Box>
			<Grid
				direction='row'
				container
				justify='center'
				alignItems='center'
				className={classes.stickyNote}>
				<Box className={classes.noteTape}></Box>
				<Grid item xs={8}>
					<Typography variant='body1'>{answer}</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

StickyNote.propTypes = {
	answer: PropTypes.string
}

export default StickyNote
