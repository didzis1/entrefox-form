import React from 'react'
import PropTypes from 'prop-types'

import Slider from '@material-ui/core/Slider'
import Box from '@material-ui/core/Box'

import { withStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

const CustomSlider = withStyles({
	root: {
		color: 'primary',
		height: 8,
	},
	thumb: {
		height: 24,
		width: 24,
		backgroundColor: '#FFFFFF',
		border: '2px solid currentColor',
		marginTop: -8,
		marginLeft: -12,
		'&:focus, &:hover, &$active': {
			boxShadow: 'inherit',
		},
	},
	active: {},
	valueLabel: {
		left: 'calc(-50% + 4px)'
	},
	track: {
		height: 10,
		borderRadius: 4,
	},
	rail: {
		height: 8,
		borderRadius: 4,
		backgroundColor: 'secondary'
	},
})(Slider)

const Range = ({ question, inputValidation }) => {

	const page = useSelector(state => state.answers.find(page => page.page === question.page))


	return (
		<Box my={4}>
			<CustomSlider
				aria-labelledby="discrete-slider"
				valueLabelDisplay="auto"
				value={page ? page.answers[question.ID] : (question.choices.max / 2)}
				name={question.ID.toString()}
				marks={question.marks}
				min={question.choices.min}
				max={question.choices.max}
				step={question.step}
				onChange={(event) => inputValidation(question.ID, event.target.value)}
				color='primary'
			/>
		</Box>
	)
}

Range.propTypes = {
	question: PropTypes.object,
	inputValidation: PropTypes.func
}

export default Range