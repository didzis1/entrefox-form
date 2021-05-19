import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import useStyles from '../styles'

const ButtonHandler = ({ text, handlePagination }) => {
	const styles = useStyles()



	return (
		<Button
			onClick={handlePagination}
			variant="contained"
			color="primary"
			className={styles.button}
		>
			{text}
		</Button>
	)
}


ButtonHandler.propTypes = {
	text: PropTypes.string,
	handlePagination: PropTypes.func
}

export default ButtonHandler