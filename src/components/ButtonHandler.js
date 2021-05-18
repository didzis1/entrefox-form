import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'

const ButtonHandler = ({ text, handlePagination }) => {

	return (
		<Button
			onClick={handlePagination}
			variant="contained"
			color="primary"
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