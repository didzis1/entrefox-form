import React from 'react'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'
import { updateAnswers } from '../../reducers/answersReducer'

import Slider from '@material-ui/core/Slider'
import Box from '@material-ui/core/Box'

import { withStyles } from '@material-ui/core/styles'

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

const Range = ({ question }) => {
	const dispatch = useDispatch()
	const rangeValue = useSelector(state => state.answers[question.ID])



	const handleChange = (event, newValue) => {
		dispatch(updateAnswers(question.ID, newValue))
	}

	return (
		<Box my={4}>
			<CustomSlider
				aria-labelledby="discrete-slider"
				valueLabelDisplay="auto"
				value={rangeValue ?? (question.choices.max / 2)}
				name={question.ID.toString()}
				marks={question.marks}
				min={question.choices.min}
				max={question.choices.max}
				step={question.step}
				onChange={handleChange}
				color='primary'
			/>
		</Box>
	)
}

Range.propTypes = {
	question: PropTypes.object
}

export default Range