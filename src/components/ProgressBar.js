import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import useStyles from '../styles'
import Box from '@material-ui/core/Box'
import LinearProgress from '@material-ui/core/LinearProgress'
import { withStyles } from '@material-ui/core/styles'

// LinearProgress component is visually upgraded with 'withStyles'
const BorderLinearProgress = withStyles(() => ({
	root: {
		height: 15,
		borderRadius: 10,
		boxShadow: '0 3px 3px -5px #93c78f, 0 2px 5px #6ba367'
	},
	colorPrimary: {
		backgroundColor: '#f5eeed'
	},
	bar: {
		borderRadius: 10,
		backgroundColor: '#33AF8E'
	}
}))(LinearProgress)


const ProgressBar = () => {

	const styles = useStyles()
	const currentPage = useSelector(state => state.currentPage)
	const progress = currentPage * 20
	// console.log(progress)

	return (
		<Box mt={2} className={styles.progress}>
			<BorderLinearProgress
				variant='determinate'
				value={progress}
			></BorderLinearProgress>
		</Box>
	)
}

ProgressBar.propTypes = {
	currentPage: PropTypes.number
}

export default ProgressBar