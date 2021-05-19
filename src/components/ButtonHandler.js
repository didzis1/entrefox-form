import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import useStyles from '../styles'

const ButtonHandler = ({ text, handlePagination, validated }) => {
	const styles = useStyles()

	return (
		<Button
			onClick={handlePagination}
			variant="contained"
			color="primary"
			className={styles.button}
			disabled={validated}
		>
			{text}
		</Button>
	)
}


ButtonHandler.propTypes = {
	text: PropTypes.string,
	handlePagination: PropTypes.func,
	validated: PropTypes.bool
}

export default ButtonHandler