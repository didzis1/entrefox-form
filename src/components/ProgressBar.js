import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import useStyles from '../styles'
import { LinearProgress, Box, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

// LinearProgress component is visually upgraded with 'withStyles'
const BorderLinearProgress = withStyles(() => ({
	root: {
		height: 15,
		borderRadius: 10,
		boxShadow: '0 2px 2px -8px #4c694c, 0 1px 3px #4c694c'
	},
	colorPrimary: {
		backgroundColor: '#f5eeed'
	},
	bar: {
		borderRadius: 10,
		backgroundColor: '#CDDC39'
	}
}))(LinearProgress)

const ProgressBar = () => {
	const styles = useStyles()
	const currentPage = useSelector((state) => state.currentPage)
	const progress = currentPage * 20
	// console.log(progress)

	return (
		<Box display='flex' mt={2} alignItems='center'>
			<Box width='100%' mr={1} className={styles.progress}>
				<BorderLinearProgress
					variant='determinate'
					value={progress}></BorderLinearProgress>
			</Box>
			<Box minWidth={35}>
				<Typography variant='body2' color='textSecondary'>
					{progress}%
				</Typography>
			</Box>
		</Box>
	)
}

ProgressBar.propTypes = {
	currentPage: PropTypes.number
}

export default ProgressBar
