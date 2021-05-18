import React, { useState } from 'react'
import PropTypes from 'prop-types'

import useStyles from '../styles'
import Box from '@material-ui/core/Box'

const ProgressBar = ({ currentPage }) => {
	const [style, setStyle] = useState({})

	const styles = useStyles()
	const progress = currentPage * 15
	console.log(progress)

	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${progress}%`
		}

		setStyle(newStyle)
	}, 200)


	return (
		<Box mt={2} className={styles.progress}>
			<Box className={styles.progressDone} style={style}>
				{progress}%
			</Box>
		</Box>
	)
}

ProgressBar.propTypes = {
	currentPage: PropTypes.number
}

export default ProgressBar