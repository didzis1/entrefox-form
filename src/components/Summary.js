import React from 'react'
import PropTypes from 'prop-types'

import ButtonHandler from './ButtonHandler'

import useStyles from '../styles'
import { Container, Typography } from '@material-ui/core'

const Summary = ({ handleFormSubmit }) => {
	const classes = useStyles()
	return (
		<Container className={classes.survey} maxWidth='md'>
			<ButtonHandler
				text='Palaa takaisin'
				handlePagination={handleFormSubmit}
			/>
			<Typography variant='h4' component='h1' align='center' gutterBottom>
				Kehityskeskustelun yhteenveto
			</Typography>
		</Container>
	)
}

Summary.propTypes = {
	handleFormSubmit: PropTypes.func
}

export default Summary
