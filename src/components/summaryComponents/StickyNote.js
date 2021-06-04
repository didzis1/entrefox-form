import React from 'react'

// Material UI
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import useStyles from '../../styles'

const StickyNote = () => {
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
					<Typography variant='body1'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

export default StickyNote
