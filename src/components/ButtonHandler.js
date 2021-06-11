import React from 'react'
import PropTypes from 'prop-types'
import { validatedButton } from '../utils'

// Material UI
import Button from '@material-ui/core/Button'
//import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core'

const ButtonHandler = ({ text, handlePagination, colors, startIcon, href }) => {
	const ColorButton = withStyles(() => ({
		root: {
			backgroundColor: colors.bg,
			color: '#000000',
			letterSpacing: '2px',
			'&:hover': {
				color: '#FFFFFF',
				backgroundColor: colors.bgHover
			}
		}
	}))(Button)

	if (href) {
		return (
			<ColorButton
				href={href}
				type='button'
				variant='contained'
				startIcon={startIcon}>
				{text}
			</ColorButton>
		)
	}

	return (
		<>
			<ColorButton
				onClick={handlePagination}
				type='button'
				variant='contained'
				startIcon={startIcon}
				disabled={text === 'Edellinen' ? false : validatedButton()}>
				{text}
			</ColorButton>
		</>
	)
}

ButtonHandler.propTypes = {
	text: PropTypes.string,
	handlePagination: PropTypes.func,
	questionSets: PropTypes.array,
	colors: PropTypes.object,
	startIcon: PropTypes.object,
	href: PropTypes.string
}

export default ButtonHandler
