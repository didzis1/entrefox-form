import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import useStyles from '../../styles'

const StickyNote = () => {
	const classes = useStyles()
	return (
		<Box>
			<Grid
				container
				justify='center'
				alignItems='center'
				className={classes.stickyNote}>
				<div className={classes.stickyTapeLeft}></div>
				<div className={classes.stickyTapeRight}></div>
				<Grid item xs={10}>
					<Typography variant='body2'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur.
					</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

export default StickyNote
